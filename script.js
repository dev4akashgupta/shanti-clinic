function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[lang][key];
    });

    // Store the language preference in localStorage
    localStorage.setItem("language", lang);
}

// Auto-detect saved language preference
window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("language") || "en";
    changeLanguage(savedLang);
});
