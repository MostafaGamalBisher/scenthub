import type { Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';

export type Messages = {
  seasons: Record<Season, string>;
};

export const messages = {
  en: {
    seasons: {
      winter: 'Winter',
      autumn: 'Autumn',
      spring: 'Spring',
      summer: 'Summer',
    },
  },
  ar: {
    seasons: {
      winter: 'شتاء',
      autumn: 'خريف',
      spring: 'ربيع',
      summer: 'صيف',
    },
  },
} as const satisfies Record<Locale, Messages>;
