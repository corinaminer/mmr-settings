import { getDefaultGameplaySettings } from "./default-settings.js";
import { getSettings, setSettings, update } from "./settings.js";

// Initialization: Load default settings, update form to show them
setSettings({"GameplaySettings": getDefaultGameplaySettings()});
populateFormFromCurrentSettings();
const allSettingFormElements = document.querySelectorAll('input[type="checkbox"],select');
allSettingFormElements.forEach(s => s.addEventListener("change", event => update(event.target)));

/** Updates all form fields to reflect current settings. */
function populateFormFromCurrentSettings() {
  const gpSettings = getSettings()["GameplaySettings"];

  // Update randomized checks
  const itemCatCheckboxes = document.querySelectorAll('input[class="item_cat"]');
  const locCatCheckboxes = document.querySelectorAll('input[class="location_cat"]');
  const classicCatCheckboxes = document.querySelectorAll('input[class="classic_cat"]');
  const itemCat = gpSettings.ItemCategoriesRandomized || [];
  const locCat = gpSettings.LocationCategoriesRandomized || [];
  const classicCat = gpSettings.ClassicCategoriesRandomized || [];
  itemCatCheckboxes.forEach(c => c.checked = itemCat.indexOf(c.name) !== -1);
  locCatCheckboxes.forEach(c => c.checked = locCat.indexOf(c.name) !== -1);
  classicCatCheckboxes.forEach(c => c.checked = classicCat.indexOf(c.name) !== -1);

  // Top-level checkboxes: Checked only if explicitly marked true in settings
  const checkboxes = document.querySelectorAll('input[class="gpCheckbox"]');
  checkboxes.forEach(checkbox => {
    const valInSettings = gpSettings[checkbox.name];
    checkbox.checked = valInSettings === true;
  })

  // Dropdowns: If setting is not explicitly set in imported settings, use default value
  const dropdowns = document.querySelectorAll('select[class="gpDropdown"]');
  dropdowns.forEach(dropdown => {
    const setVal = gpSettings[dropdown.name];
    const newVal = setVal !== undefined ? setVal : getDefaultGameplaySettings()[dropdown.name];
    dropdown.value = newVal;
  })

  // Enabled tricks: setSettings() guarantees this is populated
  const trickCheckboxes = document.querySelectorAll('input[class="tricks"]');
  trickCheckboxes.forEach(c => c.checked = gpSettings["EnabledTricks"].indexOf(c.name) !== -1);

  // Shorten cutscene settings: setSettings() guarantees this is populated
  const shortenGeneral = gpSettings.ShortenCutsceneSettings.General.split(", ");
  const shortenBossIntros = gpSettings.ShortenCutsceneSettings.BossIntros.split(", ");
  const generalCheckboxes = document.querySelectorAll('input[class="cutscene_general"');
  const bossIntroCheckboxes = document.querySelectorAll('input[class="cutscene_bossintros"');
  generalCheckboxes.forEach(c => c.checked = shortenGeneral.indexOf(c.name) !== -1);
  bossIntroCheckboxes.forEach(c => c.checked = shortenBossIntros.indexOf(c.name) !== -1);
}

/** Sets current settings to the uploaded settings and updates the form accordingly. */
function applyUploadedSettings(uploadedSettings) {
  const warnings = setSettings(uploadedSettings);
  const warningElement = document.querySelector("#custom_categories_warning");
  if (warnings.length !== 0) {
    let innerHtml = "";
    for (const w of warnings) {
      innerHtml += `<label>${w}</label><br>`
    }
    warningElement.style.display = "block";
    warningElement.innerHTML = innerHtml;
  } else {
    warningElement.style.display = "none";
  }
  populateFormFromCurrentSettings();
}

// Import uploaded settings
const fr = new FileReader();
const uploadInput = document.querySelector("#fileUpload");
const importButton = document.querySelector("#importButton");
fr.onload = function(event) { 
  const uploadedSettings = JSON.parse(event.target.result);
  // Apply gameplay settings from uploaded file, if present
  if (uploadedSettings["GameplaySettings"]) {
    applyUploadedSettings(uploadedSettings);
  } else {
    alert(`${uploadInput.files[0].name} has no GameplaySettings attribute.`);
  }
}
uploadInput.addEventListener("change", () => importButton.disabled = uploadInput.files.length === 0);
importButton.addEventListener("click", () => fr.readAsText(uploadInput.files[0]));


// Download settings
function save(filename, data) {
  const blob = new Blob([JSON.stringify(data, undefined, 2)], {type: 'application/json'});
  if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
  } else {
      const elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = filename;        
      document.body.appendChild(elem);
      elem.click();        
      document.body.removeChild(elem);
  }
}
const downloadButton = document.querySelector("#downloadButton");
downloadButton.addEventListener("submit", (event) => {
  event.preventDefault();
  save("mmr-settings.json", getSettings());
});
