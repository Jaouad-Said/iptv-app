export const LOCALES = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const RTL_LOCALES = new Set<Locale>(['ar']);

export const LOCALE_META: Record<
  Locale,
  { label: string; flag: string; ogLocale: string; hreflangCode: string; nativeName: string }
> = {
  en: { label: 'EN', flag: '🇬🇧', ogLocale: 'en_US', hreflangCode: 'en', nativeName: 'English' },
  fr: { label: 'FR', flag: '🇫🇷', ogLocale: 'fr_FR', hreflangCode: 'fr', nativeName: 'Français' },
  ar: { label: 'AR', flag: '🇸🇦', ogLocale: 'ar_SA', hreflangCode: 'ar', nativeName: 'العربية' },
};

export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.has(locale);
}
