const nonweaponProficiencies = {};
//#region Player's Handbook
nonweaponProficiencies['Agriculture'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Animal Handling'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -1,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Animal Training'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Artistic Ability'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Blacksmithing'] = {
    'slots': 1,
    'abilityScore': '@{Strength}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Brewing'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Carpentry'] = {
    'slots': 1,
    'abilityScore': '@{Strength}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Cobbling'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Cooking'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Dancing'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Direction Sense'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': +1,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Etiquette'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Fire-building'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -1,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Fishing'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -1,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Heraldry'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Languages, Modern'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Leatherworking'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Mining'] = {
    'slots': 2,
    'abilityScore': '@{Wisdom}',
    'modifier': -3,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Pottery'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': -2,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Riding, Airborne'] = {
    'slots': 2,
    'abilityScore': '@{Wisdom}',
    'modifier': -2,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Riding, Land-based'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': +3,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Rope Use'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Seamanship'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': +1,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Seamstress/Tailor'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': -1,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Singing'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Stonemasonry'] = {
    'slots': 1,
    'abilityScore': '@{Strength}',
    'modifier': -2,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Swimming'] = {
    'slots': 1,
    'abilityScore': '@{Strength}',
    'modifier': 0,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Weather Sense'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -1,
    'classes': '',
    'book': 'PHB'
};

nonweaponProficiencies['Weaving'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -1,
    'classes': '',
    'book': 'PHB'
};
nonweaponProficiencies['Ancient History'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -1,
    'classes': 'Priest/Rogue/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Animal Lore'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Appraising'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Armorer'] = {
    'slots': 2,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Astrology'] = {
    'slots': 2,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': 'Priest/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Blind-fighting'] = {
    'slots': 2,
    'abilityScore': '@{NA}',
    'modifier': 'NA',
    'classes': 'Rogue/Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Bowyer/Fletcher'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': -1,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Charioteering'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': +2,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Disguise'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': -1,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Endurance'] = {
    'slots': 2,
    'abilityScore': '@{Constitution}',
    'modifier': 0,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Engineering'] = {
    'slots': 2,
    'abilityScore': '@{Intelligence}',
    'modifier': -3,
    'classes': 'Priest/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Forgery'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': -1,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Gaming'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': 0,
    'classes': 'Rogue/Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Gem-Cutting'] = {
    'slots': 2,
    'abilityScore': '@{Dexterity}',
    'modifier': -2,
    'classes': 'Rogue/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Healing'] = {
    'slots': 2,
    'abilityScore': '@{Wisdom}',
    'modifier': -2,
    'classes': 'Priest',
    'book': 'PHB'
};
nonweaponProficiencies['Herbalism'] = {
    'slots': 2,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': 'Priest/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Hunting'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -1,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Juggling'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': -1,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Jumping'] = {
    'slots': 1,
    'abilityScore': '@{Strength}',
    'modifier': 0,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Languages, Ancient'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': 'Priest/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Local History'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': 0,
    'classes': 'Priest/Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Mountaineering'] = {
    'slots': 1,
    'abilityScore': 'NA',
    'modifier': 'NA',
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Musical Instrument'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': -1,
    'classes': 'Priest/Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Navigation'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': 'Priest/Warrior/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Reading Lips'] = {
    'slots': 2,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Reading/Writing'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': +1,
    'classes': 'Priest/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Religion'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': 'Priest/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Running'] = {
    'slots': 1,
    'abilityScore': '@{Constitution}',
    'modifier': -6,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Set-Snares'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': -1,
    'classes': 'Rogue/Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Spellcraft'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': 'Priest/Wizard',
    'book': 'PHB'
};
nonweaponProficiencies['Survival'] = {
    'slots': 2,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Tightrope Walking'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': 0,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Tracking'] = {
    'slots': 2,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': 'Warrior',
    'book': 'PHB'
};
nonweaponProficiencies['Tumbling'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': 0,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Ventriloquism'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': 'Rogue',
    'book': 'PHB'
};
nonweaponProficiencies['Weaponsmithing'] = {
    'slots': 3,
    'abilityScore': '@{Intelligence}',
    'modifier': -3,
    'classes': 'Warrior',
    'book': 'PHB'
};
//#endregion

//#region The Complete Thief's Handbook
nonweaponProficiencies['Alertness'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': +1,
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Animal Noise'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -1,
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Begging'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': '',
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Boating'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': +1,
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Fast-Talking'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': '',
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Fortune Telling'] = {
    'slots': 2,
    'abilityScore': '@{Charisma}',
    'modifier': +2,
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Information Gathering'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': '',
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Intimidation'] = {
    'slots': 1,
    'abilityScore': '',
    'modifier': '',
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Locksmithing'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Looting'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Observation'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Trailing'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': '',
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
nonweaponProficiencies['Voice Mimicry'] = {
    'slots': 2,
    'abilityScore': '@{Charisma}',
    'modifier': '',
    'classes': '',
    'book': 'The Complete Thief\'s Handbook'
};
//#endregion

//#region The Complete Book of Dwarves
nonweaponProficiencies['Boatwright'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Dwarf Runes'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': +2,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Fungi Recognition'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': +3,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Local Dwarf History'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': +2,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Sign Language'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': +2,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Signalling'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': +2,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Slow Respiration'] = {
    'slots': 1,
    'abilityScore': '@{NA}',
    'modifier': 'NA',
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Smelting'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Sound Analysis'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Survival, Underground'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Underground Navigation'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Survival (Hill, Mountain)'] = {
    'slots': 1,
    'abilityScore': '@{NA}',
    'modifier': 'NA',
    'classes': 'Warrior',
    'book': 'The Complete Book of Dwarves'
};
nonweaponProficiencies['Pest Control'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': 'Thief',
    'book': 'The Complete Book of Dwarves'
};
//#endregion

//#region The Complete Bard's Handbook
nonweaponProficiencies['Acting'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': -1,
    'classes': '',
    'book': 'The Complete Bard\'s Handbook'
};
nonweaponProficiencies['Chanting'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': +2,
    'classes': '',
    'book': 'The Complete Bard\'s Handbook'
};
nonweaponProficiencies['Craft Instrument'] = {
    'slots': 2,
    'abilityScore': '@{Dexterity}',
    'modifier': -2,
    'classes': '',
    'book': 'The Complete Bard\'s Handbook'
};
nonweaponProficiencies['Crowd Working'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Bard\'s Handbook'
};
nonweaponProficiencies['Poetry'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': '',
    'book': 'The Complete Bard\'s Handbook'
};
nonweaponProficiencies['Whistling/Humming'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': +2,
    'classes': '',
    'book': 'The Complete Bard\'s Handbook'
};
//#endregion

//#region The Complete Book of Humanoids
nonweaponProficiencies['Cheesemaking'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Book of Humanoids'
};
nonweaponProficiencies['Danger Sense'] = {
    'slots': 2,
    'abilityScore': '@{Wisdom}',
    'modifier': +1,
    'classes': '',
    'book': 'The Complete Book of Humanoids'
};
nonweaponProficiencies['Drinking'] = {
    'slots': 1,
    'abilityScore': '@{Constitution}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Book of Humanoids'
};
nonweaponProficiencies['Eating'] = {
    'slots': 1,
    'abilityScore': '@{Constitution}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Book of Humanoids'
};
nonweaponProficiencies['Hiding'] = {
    'slots': 2,
    'abilityScore': '@{Intelligence}',
    'modifier': -1,
    'classes': '',
    'book': 'The Complete Book of Humanoids'
};
nonweaponProficiencies['Winemaking'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Book of Humanoids'
};
nonweaponProficiencies['Close-quarter Fighting'] = {
    'slots': 2,
    'abilityScore': '@{Dexterity}',
    'modifier': 0,
    'classes': 'Warrior/Rogue',
    'book': 'The Complete Book of Humanoids'
};
nonweaponProficiencies['Natural Fighting'] = {
    'slots': 2,
    'abilityScore': '@{Strength}',
    'modifier': +1,
    'classes': 'Warrior',
    'book': 'The Complete Book of Humanoids'
};
nonweaponProficiencies['Wild Fighting'] = {
    'slots': 2,
    'abilityScore': '@{Constitution}',
    'modifier': 0,
    'classes': 'Warrior',
    'book': 'The Complete Book of Humanoids'
};
//#endregion

//#region The Complete Ranger's Handbook
nonweaponProficiencies['Cartography'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Distance Sense'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Falconry'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': '',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Persuasion'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': 0,
    'classes': '',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Riding, Sea-based'] = {
    'slots': 2,
    'abilityScore': '@{Dexterity}',
    'modifier': -2,
    'classes': '',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Signaling'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': '',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Camouflage'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': 'Fighter/Rogue',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Foraging'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': 'Warrior/Rogue',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Spelunking'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -2,
    'classes': 'Warrior',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Trail Marking'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': 'Warrior',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Trail Signs'] = {
    'slots': 1,
    'abilityScore': '@{Intelligence}',
    'modifier': -1,
    'classes': 'Warrior/Rogue',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Veterinary Healing'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -3,
    'classes': 'Priest',
    'book': 'The Complete Ranger\'s Handbook'
};
nonweaponProficiencies['Weaponsmithing, Crude'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -3,
    'classes': 'Warrior',
    'book': 'The Complete Ranger\'s Handbook'
};
//#endregion

//#region The Complete Paladin's Handbook
nonweaponProficiencies['Bureaucracy'] = {
    'slots': 2,
    'abilityScore': '@{Intelligence}',
    'modifier': 0,
    'classes': 'Priest/Rogue',
    'book': 'The Complete Paladin\'s Handbook'
};
nonweaponProficiencies['Diagnostics'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': -1,
    'classes': 'Priest',
    'book': 'The Complete Paladin\'s Handbook'
};
nonweaponProficiencies['Jousting'] = {
    'slots': 1,
    'abilityScore': '@{Dexterity}',
    'modifier': +2,
    'classes': 'Warrior',
    'book': 'The Complete Paladin\'s Handbook'
};
nonweaponProficiencies['Law'] = {
    'slots': 1,
    'abilityScore': '@{Wisdom}',
    'modifier': 0,
    'classes': 'Warrior/Priest',
    'book': 'The Complete Paladin\'s Handbook'
};
nonweaponProficiencies['Oratory'] = {
    'slots': 1,
    'abilityScore': '@{Charisma}',
    'modifier': 0,
    'classes': 'Warrior/Priest',
    'book': 'The Complete Paladin\'s Handbook'
};
//#endregion
module.exports = nonweaponProficiencies;