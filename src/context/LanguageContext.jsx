import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import translations from '../translate/translations';

const STORAGE_KEY = 'gatee-lang';
const SUPPORTED = ['en', 'hi', 'ma'];

const LanguageContext = createContext(null);

// Default language: English
// Saved language preference will be used if available.
const getInitialLang = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (SUPPORTED.includes(saved)) {
      return saved;
    }
  } catch (error) {
    // Storage can be blocked (private mode). Ignore and continue.
  }

  // Always default to English
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  // Remember the selected language
  // and set the correct HTML language attribute.
  useEffect(() => {
    const htmlLang = {
      en: 'en',
      hi: 'hi',
      ma: 'mr'
    };

    document.documentElement.lang = htmlLang[lang] || 'en';

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Ignore storage errors
    }
  }, [lang]);

  // Manually set language
  const setLanguage = useCallback((next) => {
    if (SUPPORTED.includes(next)) {
      setLang(next);
    }
  }, []);

  // Language order:
  // English → Hindi → Marathi → English
  const toggleLanguage = useCallback(() => {
    setLang((current) => {
      if (current === 'en') return 'hi';
      if (current === 'hi') return 'ma';
      return 'en';
    });
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLanguage,
      toggleLanguage,
      t: translations[lang]
    }),
    [lang, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used inside <LanguageProvider>'
    );
  }

  return context;
};