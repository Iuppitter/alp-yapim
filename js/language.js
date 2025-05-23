// Language management
let currentLang = localStorage.getItem('language') || 'tr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateContent();
}

function updateContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update language switcher with flag emojis and language codes
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        langSwitcher.innerHTML = currentLang === 'tr' ? '🇬🇧 EN' : '🇹🇷 TR';
        langSwitcher.setAttribute('title', currentLang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç');
    }

    // Update page title if it has a translation
    const titleKey = document.querySelector('title').getAttribute('data-i18n');
    if (titleKey && translations[currentLang][titleKey]) {
        document.title = translations[currentLang][titleKey];
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add language switcher to navigation if it doesn't exist
    const headerNav = document.querySelector('.header__navigation');
    if (headerNav && !document.querySelector('.language-switcher')) {
        const langItem = document.createElement('div');
        langItem.className = 'language-switcher-container';
        const langLink = document.createElement('a');
        langLink.href = '#';
        langLink.className = 'menu__link language-switcher';
        langLink.setAttribute('aria-label', 'Switch language');
        langLink.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(currentLang === 'tr' ? 'en' : 'tr');
        });
        langItem.appendChild(langLink);
        headerNav.appendChild(langItem);
    }

    // Set initial language
    setLanguage(currentLang);
}); 