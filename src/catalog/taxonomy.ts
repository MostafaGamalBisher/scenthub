import type { Locale } from '@/i18n/config';

export type Localized<T> = Record<Locale, T>;

export const CONCENTRATIONS = ['edt', 'edp', 'parfum', 'cologne'] as const;
export type Concentration = (typeof CONCENTRATIONS)[number];

export const FAMILIES = [
  'citrus',
  'floral',
  'woody',
  'amber',
  'spicy',
  'gourmand',
  'fruity',
  'green',
  'musk',
  'leather',
] as const;
export type Family = (typeof FAMILIES)[number];

export const POSITIONS = ['top', 'heart', 'base'] as const;
export type Position = (typeof POSITIONS)[number];

export const AUDIENCES = ['men', 'women', 'unisex'] as const;
export type Audience = (typeof AUDIENCES)[number];

export const SEASONS = ['winter', 'autumn', 'summer', 'spring'] as const;
export type Season = (typeof SEASONS)[number];
