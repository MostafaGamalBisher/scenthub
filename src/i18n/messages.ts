import type { Availability, Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';

export type Messages = {
  seasons: Record<Season, string>;
  units: Record<'ml', string>;
  availability: Record<Availability, string>;
  noProducts: string;
};

export const messages = {
  en: {
    seasons: {
      winter: 'Winter',
      autumn: 'Autumn',
      spring: 'Spring',
      summer: 'Summer',
    },
    units: {
      ml: 'mL',
    },
    availability: {
      'available': 'Available',
      'low-stock': 'Low Stock',
      'out-of-stock': 'Out Of Stock',
    },
    noProducts: 'No products to display',
  },
  ar: {
    seasons: {
      winter: 'شتاء',
      autumn: 'خريف',
      spring: 'ربيع',
      summer: 'صيف',
    },
    units: {
      ml: 'مل',
    },
    availability: {
      'available': 'متوفر',
      'low-stock': 'كمية قليلة',
      'out-of-stock': 'نفدت الكمية',
    },
    noProducts: 'لا توجد منتجات لعرضها',
  },
} as const satisfies Record<Locale, Messages>;
