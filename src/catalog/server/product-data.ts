import type { Product } from '@/catalog/products';

export const PRODUCTS = {
  'alexandria-ii': {
    name: { en: 'Alexandria II', ar: 'أليكساندريا 2' },
    house: 'xerjoff',
    concentration: 'parfum',
    audience: 'men',
    year: 2000,
    season: ['winter'],
    variants: [
      {
        id: 'alex-100',
        sizeMl: 100,
        priceHalalas: 200000,
        availability: 'available',
      },
      {
        id: 'alex-50',
        sizeMl: 50,
        priceHalalas: 100000,
        availability: 'low-stock',
      },
    ],
    notes: { top: ['lemon'], heart: ['jasmine'], base: ['vanilla'] },
  },

  'layton': {
    name: { en: 'Layton', ar: 'ليتون' },
    house: 'parfums-de-marly',
    concentration: 'edp',
    audience: 'men',
    year: 2000,
    season: ['spring'],
    variants: [
      {
        id: 'layt-100',
        sizeMl: 100,
        priceHalalas: 150000,
        availability: 'available',
      },
      {
        id: 'layt-50',
        sizeMl: 50,
        priceHalalas: 75000,
        availability: 'out-of-stock',
      },
    ],
    notes: { top: ['lemon'], heart: ['jasmine'], base: ['vanilla'] },
  },
} as const satisfies Record<string, Product>;
