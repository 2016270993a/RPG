on('remove:repeating_vow remove:repeating_bonds remove:repeating_progress remove:repeating_sites', function() { 
  const timestamp = Number(new Date())
  setAttrs({ repeat_delete: timestamp });
});