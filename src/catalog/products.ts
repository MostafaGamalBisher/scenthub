import type {
  Audience,
  Availability,
  Concentration,
  Localized,
  Position,
  Season,
} from '@/catalog/taxonomy';
import type { CatalogHouse, HouseId } from '@/catalog/houses';
import type { NoteId } from '@/catalog/notes';

export type Variant = {
  id: string;
  sizeMl: number;
  /** VAT-inclusive selling price in integer halalas. */
  priceHalalas: number;
  availability: Availability;
};

export type Notes = Record<Position, readonly NoteId[]>;

export type ProductRecord = {
  name: Localized<string>;
  house: HouseId;
  concentration: Concentration;
  audience: Audience;
  year?: number;
  season: readonly Season[];
  variants: readonly Variant[];
  notes: Notes;
};

export type ProductId = string;

export type CatalogProduct = {
  id: ProductId;
  house: CatalogHouse;
} & Omit<ProductRecord, 'house'>;

export type ProductsResponse = {
  products: readonly CatalogProduct[];
  page: number;
  limit: number;
  total: number;
};
