import type { Family } from '@/catalog/families';

export const FAMILIES = {
  citrus: { name: { en: 'Citrus', ar: 'حمضي' } },
  floral: { name: { en: 'Floral', ar: 'زهري' } },
  woody: { name: { en: 'Woody', ar: 'خشبي' } },
  amber: { name: { en: 'Amber', ar: 'عنبري' } },
  spicy: { name: { en: 'Spicy', ar: 'متبل' } },
  gourmand: { name: { en: 'Gourmand', ar: 'غورماند' } },
  fruity: { name: { en: 'Fruity', ar: 'فاكهي' } },
  green: { name: { en: 'Green', ar: 'أخضر' } },
  musk: { name: { en: 'Musk', ar: 'مسكي' } },
  leather: { name: { en: 'Leather', ar: 'جلدي' } },
} as const satisfies Record<string, Family>;
