const gameplaySettingsForm = document.querySelector("#gameplaySettings");
const submitForm = document.querySelector("#submitForm");

function save(filename, data) {
  const blob = new Blob([JSON.stringify(data, undefined, 2)], {type: 'application/json'});
  if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
  }
  else {
      const elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = filename;        
      document.body.appendChild(elem);
      elem.click();        
      document.body.removeChild(elem);
  }
}


function extractChecklist(checkbox_name) {
  // Extract the checked boxes for the setting
  const checkboxes = document.querySelectorAll(`input[name="${checkbox_name}"]`);
  const checked_items = [];
  checkboxes.forEach(i => {
    if (i.checked) {
      checked_items.push(i.value);
    }
  })
  return checked_items;
}

function extractChecklistSetting(setting_name, checkbox_name, settings_obj) {
  const checked_items = extractChecklist(checkbox_name);
  settings_obj[setting_name] = checked_items;

  // Delete the checkbox name from the settings
  delete settings_obj[checkbox_name];
}

/**
 * Takes in a settings object and changes any "on" or "off" values to `true` and `false` respectively.
 */
function makeCheckboxesBooleans(checkboxes, obj) {
  checkboxes.forEach(c => obj[c.name] = c.checked);
}

function convertGameplaySettings() {
  const gameplaySettingsFormData = new FormData(gameplaySettingsForm);
  var gsObj = Object.fromEntries(gameplaySettingsFormData.entries());

  // Extract categories to randomize
  extractChecklistSetting("ItemCategoriesRandomized", "item_cat", gsObj);
  extractChecklistSetting("LocationCategoriesRandomized", "location_cat", gsObj);
  extractChecklistSetting("ClassicCategoriesRandomized", "classic_cat", gsObj);

  // Extract enabled tricks
  extractChecklistSetting("EnabledTricks", "tricks", gsObj);

  /*
    Convert shorten cutscene settings to its stupid format.
    Entries should only be added if they are not empty.
    "ShortenCutsceneSettings": {
      "General": "BlastMaskThief, Tingle, JimRunning, Kotake, HoldAText, EverythingElse",
      "BossIntros": "Odolwa, Goht, Gyorg, Majora, IgosDuIkana, Gomess"
    },
  */
  const shortenCutsceneSettings = {};
  const cutsceneGeneralCheckboxName = "cutscene_general";
  const cutsceneBossIntrosCheckboxName = "cutscene_bossintros";
  const generalToShorten = extractChecklist(cutsceneGeneralCheckboxName);
  const bossIntrosToShorten = extractChecklist(cutsceneBossIntrosCheckboxName);
  if (generalToShorten.length !== 0) {
    shortenCutsceneSettings["General"] = generalToShorten.join(", ");
  }
  if (bossIntrosToShorten.length !== 0) {
    shortenCutsceneSettings["BossIntros"] = bossIntrosToShorten.join(", ");
  }
  gsObj["ShortenCutsceneSettings"] = shortenCutsceneSettings;
  delete gsObj[cutsceneGeneralCheckboxName];
  delete gsObj[cutsceneBossIntrosCheckboxName];

  // Convert required boss remains to a number
  gsObj["RequiredBossRemains"] = parseInt(gsObj["RequiredBossRemains"]);
  
  // Set checkbox values to booleans
  const checkboxes = document.querySelectorAll('input[class="gpCheckbox"]');
  checkboxes.forEach(c => gsObj[c.name] = c.checked);

  return gsObj;
}

function saveSettings() {
  const settings = {};

  const gameplaySettings = convertGameplaySettings();
  console.log(gameplaySettings);

  // Save the file
  settings["GameplaySettings"] = gameplaySettings;
  save("mmr-settings.json", settings);
}

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveSettings();
});
