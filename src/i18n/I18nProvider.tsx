"use client";

import { createContext, useCallback, useContext, useState } from "react";

import { getDictionary, type Dictionary } from "./dictionaries";
import type { Locale } from "./locale";

const DictionaryContext = createContext<Dictionary | null>(null);

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const LOCALE_COOKIE = "locale";
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  /* Switching is instant: no reload, no flash. The cookie only exists so the
     next server render already lands in the chosen language. */
  const setLocale = useCallback((next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
    document.documentElement.lang = next;
    setLocaleState(next);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <DictionaryContext.Provider value={getDictionary(locale)}>
        {children}
      </DictionaryContext.Provider>
    </LocaleContext.Provider>
  );
}

export function useI18n(): Dictionary {
  const dictionary = useContext(DictionaryContext);
  if (!dictionary) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return dictionary;
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocale must be used inside <I18nProvider>");
  }
  return value;
}
