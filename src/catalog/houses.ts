import type { Localized } from '@/catalog/taxonomy';

export type House = {
  name: Localized<string>;
};

export type HouseId = string;

export type CatalogHouse = {
  id: HouseId;
} & House;
