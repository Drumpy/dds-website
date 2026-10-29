"use client";

import { useLocale, useI18n } from "@/i18n/I18nProvider";
import { locales } from "@/i18n/locale";

const labels: Record<string, string> = {
  en: "English",
  es: "Español",
};

function LanguageToggle() {
  const t = useI18n();
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.hero.languageLabel}
      className="inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur-md"
    >
      {locales.map((option) => {
        const isActive = option === locale;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={isActive}
            aria-label={labels[option]}
            className={`rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] transition-colors duration-150 ease-out-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
              isActive
                ? "bg-white/12 text-white"
                : "text-white/40 can-hover:hover:text-white/80"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageToggle;
