import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import translations from '../translate/translations';

const STORAGE_KEY = 'gatee-lang';
const SUPPORTED = ['en', 'hi'];

const LanguageContext = createContext(null);

// Order of preference: saved choice -> browser language (Hindi) -> English
const getInitialLang = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch (error) {
    // Storage can be blocked (private mode). Ignore and continue.
  }

  const browserLang = (typeof navigator !== 'undefined' && navigator.language) || 'en';
  return browserLang.toLowerCase().startsWith('hi') ? 'hi' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  // Remember the choice and tell the browser which language the page is in
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Ignore storage errors
    }
  }, [lang]);

  const setLanguage = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLang(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'en' ? 'hi' : 'en'));
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

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside <LanguageProvider>');
  }
  return context;
};