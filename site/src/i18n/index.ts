import en, { type Translations } from './en';
import fr from './fr';
import ar from './ar';
import type { Locale } from '../config/locales';

const translations: Record<Locale, Translations> = { en, fr, ar };

/**
 * Returns a typed translation function for the given locale.
 * Falls back to English if a key is missing in the target locale.
 *
 * Usage:
 *   const t = useTranslations(lang);
 *   t('nav.home') // => 'Home' | 'Accueil' | 'الرئيسية'
 */
export function useTranslations(locale: Locale) {
  return function t<K extends keyof Translations>(section: K): Translations[K] {
    const key = section as string;
    // Support dot-notation keys like 'nav.home', 'footer.privacy'
    if (key.includes('.')) {
      const parts = key.split('.');
      let value: any = translations[locale];
      for (const part of parts) value = value?.[part];
      if (value !== undefined) return value;
      // Fallback to English
      value = translations['en'] as any;
      for (const part of parts) value = value?.[part];
      return value;
    }
    const localeData = translations[locale];
    const value = localeData[section];
    if (value !== undefined) return value;
    // Fallback to English
    return translations['en'][section];
  };
}

/**
 * Replaces {brand} placeholder in a translated string.
 */
export function interpolate(str: string, vars: Record<string, string | number>): string {
  return str.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));
}

export type { Translations };
