import type { ProductRecord } from '@/catalog/products';

export const PRODUCTS = {
  'alexandria-ii': {
    name: { en: 'Alexandria II', ar: 'أليكساندريا 2' },
    house: 'xerjoff',
    concentration: 'parfum',
    audience: 'men',
    year: 2000,
    season: ['winter'],
    images: [
      {
        id: 'alex-1',
        src: 'https://placehold.co/600x400/png?text=alex-1',
        alt: { en: 'Placeholder 2 image', ar: 'صور مؤقتة عطر اليكسندريا 2' },
      },
      {
        id: 'alex-2',
        src: 'https://placehold.co/600x400/png?text=alex-2',
        alt: { en: 'Placeholder 2 image', ar: 'صور مؤقتة عطر اليكسندريا 2' },
      },
    ],
    primaryImageId: 'alex-1',
    variants: [
      {
        id: 'alex-100',
        sizeMl: 100,
        priceHalalas: 200000,
        availability: 'available',
        imageId: 'alex-1',
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
    images: [
      {
        id: 'lyton-1',
        src: 'https://placehold.co/600x400/png?text=lyton-1',
        alt: { en: 'Placeholder 2 image', ar: 'صورة مؤقتة عطر ليتون' },
      },
      {
        id: 'lyton-2',
        src: 'https://placehold.co/600x400/png?text=lyton-2',
        alt: { en: 'Placeholder 2 image', ar: 'صورة مؤقتة عطر ليتون' },
      },
    ],
    primaryImageId: 'lyton-1',
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
} as const satisfies Record<string, ProductRecord>;
