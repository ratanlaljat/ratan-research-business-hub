/* ===================================
   RRBH Language System
   i18n.js
=================================== */

let translations = {};
let currentLanguage = localStorage.getItem("rrbh_lang") || "en";

/* Load strings.json */
async function loadTranslations() {
    try {
        const response = await fetch("data/strings.json");
        translations = await response.json();

        applyTranslations(currentLanguage);
        updateLanguageButton();

    } catch (error) {
        console.error("Translation file not loaded:", error);
    }
}

/* Apply translations */
function applyTranslations(lang) {

    currentLanguage = lang;

    document.documentElement.lang = lang;

    localStorage.setItem("rrbh_lang", lang);

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key = element.dataset.i18n;

        if (
            translations[key] &&
            translations[key][lang]
        ) {
            element.textContent =
                translations[key][lang];
        }
    });

    updateLanguageButton();
}

/* Toggle Language */
function toggleLanguage() {

    const newLanguage =
        currentLanguage === "en"
        ? "hi"
        : "en";

    applyTranslations(newLanguage);
}

/* Update Button Text */
function updateLanguageButton() {

    const btn =
        document.getElementById("languageToggle");

    if (!btn) return;

    btn.textContent =
        currentLanguage === "en"
        ? "हिं"
        : "EN";
}

/* Initialize */
document.addEventListener(
    "DOMContentLoaded",
    () => {
        loadTranslations();
    }
);