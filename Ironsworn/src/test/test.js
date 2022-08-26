const ATTR_PREFIX = 'attr_';
const REPEATING_PREFIX = 'repeating_';

// events handling
const eventHandlers = {}; // stores the handlers for each sheet event: event_name => [handler]

window.on = (eventNames, fn) => eventNames.split(' ').forEach(eventName => {
  eventName = eventName.toLowerCase();

  let handlers;
  if (!eventHandlers.hasOwnProperty(eventName)) {
    handlers = [];
    eventHandlers[eventName] = handlers;
  } else {
    handlers = eventHandlers[eventName];
  }

  console.log('Registering handler for event ' + eventName);

  handlers.push(fn);
});

const attributeStore = {}; // stores the attribute values, backend for getAttrs/setAttrs

$(document).ready(() => {
  const inputSelector = `input[name^='${ATTR_PREFIX}'], select[name^='${ATTR_PREFIX}']`;

  function isSharedSheetItem(item) {
    // determines if an item belongs to the shared sheet,
    // i.e. it has a parent with an input marking a shared page
    if (item.siblings(`input[name='${ATTR_PREFIX}shared_page']`).length > 0) {
      return true;
    }

    const parent = item.parent();
    if (parent.length > 0) {
      return isSharedSheetItem(parent);
    }

    return false;
  }

  // rename items that are in a fieldset (repeating section)
  // attr_my_attr_name in section repeating_mysection => attr_repeating_mysection_my_attr_name
  $('fieldset').each(function () {
    const fieldset = $(this);
    const fieldsetId = fieldset.attr('class').split(' ').find(_ => _.startsWith(REPEATING_PREFIX));

    // exclude fieldsets that are for the shared sheet, because they have the same name as in the character sheet and it fucks up the system
    // (having the same name is not supposed to be supported in roll20 either)
    if (!isSharedSheetItem(fieldset)) {
      fieldset.find(`${inputSelector}, span[name^='${ATTR_PREFIX}']`).each(function () {
        const input = $(this);
        const attributeName = `${fieldsetId}_${input.attr('name').substring(ATTR_PREFIX.length)}`;
        input.attr('name', `${ATTR_PREFIX}${attributeName}`);
      });
    }
  });

  // init the attributes values in the store
  const inputsSelector = `input[name^='${ATTR_PREFIX}'], select[name^='${ATTR_PREFIX}']`;
  $(inputsSelector).each(function () {
    const input = $(this);

    let attributeName = input.attr('name').substring(ATTR_PREFIX.length);
    if (input.attr('type') == 'radio' || input.attr('type') == 'checkbox') {
      if (input.prop('checked')) {
        attributeStore[attributeName] = input.val();
      }
    } else {
      if (input.val() != '') {
        attributeStore[attributeName] = input.val();
      }
    }
  });

  // handle changes for input and select
  $(inputsSelector).each(function () {
    const input = $(this);

    input.change(event => {
      const inputName = input.attr('name');

      // get the value
      let value;
      if (input.attr('type') === 'checkbox') {
        value = event.target.checked ? 'on' : 'off';
      } else {
        value = event.target.value;
      }

      console.log(`New value for input ${inputName}: ${value}`);

      // set the attribute value
      let attributeName = inputName.substring(ATTR_PREFIX.length);
      setAttrs({ [`${attributeName}`]: value });
    });
  });

  // handle rolls
  $("button[type='roll']").each(function () {
    const button = $(this);
    button.click(() => {
      const firstSpaceIndex = button.val().indexOf(' ');
      let templateDef = button.val().substring(2, firstSpaceIndex - 1);
      const templateId = templateDef.split(':')[1];

      // replace attributes
      let rollSpec = button.val().substring(firstSpaceIndex);
      for (const group of rollSpec.matchAll(/@\{(\w+)\}/g)) {
        rollSpec = rollSpec.replace(group[0], attributeStore[group[1]] ?? '@' + group[1]);
      }

      // show result
      const templateSpec = {
        templateId,
        display: true,
        values: {}
      };
      (rollSpec + ' ').match(/\{\{(.+?)\}\}\s/g).map(_ => _.substring(2, _.length - 3)).forEach(_ => {
        const parts = _.split('=');
        templateSpec.values[parts[0]] = parts[1];
      });

      window.alert(JSON.stringify(templateSpec, undefined, 2));
      console.log(JSON.stringify(templateSpec, undefined, 2));
      console.log(`&\{${templateDef}\}${rollSpec}`);
    });
  });

  $('.charsheet').localize();
});

// attributes handling
function getAttributeValue(attributeName) {
  if (attributeStore.hasOwnProperty(attributeName)) {
    return attributeStore[attributeName];
  } else {
    return undefined;
  }
}

window.getAttrs = (attributeNames, fn) => {
  const values = {};
  for (let i = 0; i < attributeNames.length; i++) {
    const attributeName = attributeNames[i];

    values[attributeName] = getAttributeValue(attributeName);
  }

  fn(values);
}

window.setAttrs = (attributes, isInit) => {
  // cache previous values
  const previousValues = {};
  for (const attributeName in attributes) {
    previousValues[attributeName] = getAttributeValue(attributeName);
  }

  // store new values
  Object.assign(attributeStore, attributes);

  console.log('Stored attributes: ' + JSON.stringify(attributes));

  // react to value changes
  for (const attributeName in attributes) {
    const attributeValue = attributes[attributeName];
    const eventInfo = {
      previousValue: previousValues[attributeName],
      newValue: attributeValue,
      sourceAttribute: attributeName
    }

    // if the value changed
    if (eventInfo.previousValue !== eventInfo.newValue || isInit) {
      const fieldsetId = attributeName.startsWith(REPEATING_PREFIX)
        ? attributeName.substring(0, attributeName.indexOf('_', REPEATING_PREFIX.length))
        : null;

      // set the value of the input matching the attribute, which may be in a fieldset
      if (fieldsetId) {
        const fieldsets = $(`fieldset.${fieldsetId}`);
        for (let i = 0; i < fieldsets.length; i++) {
          const fieldset = fieldsets['' + i];

          setValue($(fieldset));
        }
      } else {
        setValue($('body'));
      }

      function setValue(inputParent) {
        // set input value
        const inputName = ATTR_PREFIX + attributeName.toLowerCase();

        console.log(`Updating input ${inputName} with value ${attributeValue}`);

        let input = inputParent.find(`input[name='${inputName}'], select[name='${inputName}']`);
        input.val([attributeValue]);

        // set span text
        let span = inputParent.find(`span[name='${ATTR_PREFIX}${attributeName.toLowerCase()}']`);
        span.text(attributeValue);
      }

      // invoke event handlers
      let eventName;
      if (fieldsetId) {
        const eventAttributeName = attributeName.substring(fieldsetId.length + 1);
        eventName = `change:${fieldsetId}:${eventAttributeName}`;
      } else {
        eventName = `change:${attributeName}`;
      }
      eventName = eventName.toLowerCase();

      if (eventHandlers.hasOwnProperty(eventName)) {
        console.log('Invoking handlers for event: ' + eventName);

        eventHandlers[eventName].forEach(handler => handler(eventInfo));
      }
    }
  }
};

// initialize attributes
$(document).ready(() => {
  setAttrs(initAttributes, true);
});
