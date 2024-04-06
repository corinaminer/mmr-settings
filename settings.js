import { getDefaultGameplaySettings } from "./default-settings.js";

let settings = {"GameplaySettings": {}};

/**
 * Sets the current settings to the provided settings, filling in default values as needed.
 * Does not clear or modify unrecognized settings in the provided object; this way users can
 * upload and modify their settings.json without losing CosmeticSettings or other new settings.
 * 
 * @returns A list of randomization categories, if any, for which the provided settings have
 *          more granular customization than per-category.
 */
export function setSettings(newSettings) {
  settings = newSettings;
  const gpSettings = settings["GameplaySettings"];

  // If EnabledTricks is not defined, explicitly set it to the default.
  // Otherwise, modifying tricks list will clear the default-enabled tricks.
  // Same for ShortenCutsceneSettings.
  const defaultGpSettings = getDefaultGameplaySettings();
  if (!gpSettings["EnabledTricks"]) {
    gpSettings["EnabledTricks"] = getDefaultGameplaySettings()["EnabledTricks"];
  }
  if (!gpSettings["ShortenCutsceneSettings"]) {
    gpSettings["ShortenCutsceneSettings"] = defaultGpSettings["ShortenCutsceneSettings"];
  } else {
    const scSettings = gpSettings["ShortenCutsceneSettings"];
    // Note that "" is not a valid value for cutscene lists; to specify no cutscenes, it must be "None".
    if (!scSettings["General"]) {
      scSettings["General"] = defaultGpSettings["ShortenCutsceneSettings"]["General"];
    }
    if (!scSettings["BossIntros"]) {
      scSettings["BossIntros"] = defaultGpSettings["ShortenCutsceneSettings"]["BossIntros"];
    }
  }

  // TODO: Convert CustomItemListString to check categories
  return [];
}

/** Returns current active settings */
export function getSettings() {
  return settings;
}

/** Update current settings from a form element change */
export function update(changedFormElement) {
  switch (changedFormElement.tagName) {
    case "INPUT":
      if (changedFormElement.type !== "checkbox") {
        console.warn(`Warning: Unhandled input type ${changedFormElement.type}`);
        break;
      }
      updateCheckbox(changedFormElement);
      break;
    case "SELECT":
      updateDropdown(changedFormElement);
      break;
    default:
      console.warn(`Warning: Unhandled update element ${changedFormElement.tagName}`);
  }
}

function updateCheckbox(checkbox) {
  const gpSettings = settings["GameplaySettings"];
  let listName;
  switch(checkbox.className) {
    // Top level checkbox
    case "gpCheckbox":
      gpSettings[checkbox.name] = checkbox.checked;
      break;
    // Item randomization checkboxes
    case "item_cat":
      listName = "ItemCategoriesRandomized";
    case "location_cat":
      listName = listName || "LocationCategoriesRandomized";
    case "classic_cat":
      listName = listName || "ClassicCategoriesRandomized";
    case "tricks":
      listName = listName || "EnabledTricks";
      const checklist = getOrCreateList(gpSettings, listName);
      updateChecklist(checkbox.name, checkbox.checked, checklist);
      break;
    case "cutscene_general":
      listName = "General";
    case "cutscene_bossintros":
      listName = listName || "BossIntros";
      // Cutscene setting lists have to work a little differently because the shortened cutscene
      // setting has a string format like "BossIntros": "Odolwa, Goht, Gyorg, Majora"
      const shortenCutsceneSettings = getOrCreateObj(gpSettings, "ShortenCutsceneSettings");
      const cutsceneListStr = shortenCutsceneSettings[listName];
      const cutsceneList = cutsceneListStr === "None" ? [] : cutsceneListStr.split(", ");
      updateChecklist(checkbox.name, checkbox.checked, cutsceneList);
      shortenCutsceneSettings[listName] = cutsceneList.length ? cutsceneList.join(", ") : "None";
      break;
    default:
      console.warn(`Warning: Unhandled checkbox class ${checkbox.className}`);
  }
}

function getOrCreateList(obj, listName) {
  const list = obj[listName] || [];
  obj[listName] = list;
  return list;
}

function getOrCreateObj(parentObj, objName) {
  const obj = parentObj[objName] || {};
  parentObj[objName] = obj;
  return obj;
}

function updateChecklist(checkboxName, isChecked, list) {
  if (isChecked) {
    if (list.indexOf(checkboxName) === -1) {
      list.push(checkboxName);
    }
  } else {
    const settingIndex = list.indexOf(checkboxName);
    if (settingIndex !== -1) {
      list.splice(settingIndex, 1);
    }
  }
}

function updateDropdown(dropdown) {
  if (dropdown.name === "RequiredBossRemains") {
    // TODO: Probably a cleaner way to do this.
    settings["GameplaySettings"][dropdown.name] = parseInt(dropdown.value);
  } else {
    settings["GameplaySettings"][dropdown.name] = dropdown.value;
  }
}
