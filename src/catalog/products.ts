import type {
  Audience,
  Concentration,
  Localized,
  Position,
  Season,
} from '@/catalog/taxonomy';
import type { HouseId } from '@/catalog/houses';
import type { NoteId } from '@/catalog/notes';

export type Variant = {
  id: string;
  sizeMl: number;
  /** VAT-inclusive selling price in integer halalas. */
  priceHalalas: number;
};

export type Notes = Record<Position, readonly NoteId[]>;

export type Product = {
  name: Localized<string>;
  house: HouseId;
  concentration: Concentration;
  audience: Audience;
  year?: number;
  season: readonly Season[];
  variants: readonly Variant[];
  notes: Notes;
};

export type CatalogProduct = { id: string } & Product;

export const PRODUCTS = {
  'alexandria-ii': {
    name: { en: 'Alexandria II', ar: 'أليكساندريا 2' },
    house: 'xerjoff',
    concentration: 'parfum',
    audience: 'men',
    year: 2000,
    season: ['winter'],
    variants: [
      { id: 'alex-100', sizeMl: 100, priceHalalas: 200000 },
      { id: 'alex-50', sizeMl: 50, priceHalalas: 100000 },
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
      { id: 'layt-100', sizeMl: 100, priceHalalas: 150000 },
      { id: 'layt-50', sizeMl: 50, priceHalalas: 75000 },
    ],
    notes: { top: ['lemon'], heart: ['jasmine'], base: ['vanilla'] },
  },
} as const satisfies Record<string, Product>;

export type ProductId = keyof typeof PRODUCTS;
