export const LOCALES = ['en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  const isValidLocale: boolean = LOCALES.some(
    (locale: Locale) => locale === value
  );

  return isValidLocale;
}
