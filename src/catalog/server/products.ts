import type { ProductsResponse } from '@/catalog/products';
import { PRODUCTS } from '@/catalog/server/product-data';
import { HOUSES } from '@/catalog/server/house-data';
import type { HouseId } from '@/catalog/houses';
import type { Season } from '@/catalog/taxonomy';

const PRODUCTS_PAGE_SIZE = 12;

export function getProducts(
  page: number = 1,
  houseIds: readonly HouseId[] = [],
  selectedSeasons: readonly Season[] = []
): ProductsResponse {
  const productsEntries = Object.entries(PRODUCTS);

  let housedProductsEntries;

  if (houseIds.length === 0) {
    housedProductsEntries = productsEntries;
  } else {
    housedProductsEntries = productsEntries.filter(([, value]) =>
      houseIds.includes(value.house)
    );
  }

  let seasonedProductsEntries;

  if (selectedSeasons.length === 0) {
    seasonedProductsEntries = housedProductsEntries;
  } else {
    seasonedProductsEntries = housedProductsEntries.filter(([, value]) =>
      selectedSeasons.some((season) => value.season.includes(season))
    );
  }

  const matchingProductsEntries = seasonedProductsEntries;

  const totalPages = Math.ceil(
    matchingProductsEntries.length / PRODUCTS_PAGE_SIZE
  );

  if (page > totalPages) {
    return {
      products: [],
      page: page,
      limit: PRODUCTS_PAGE_SIZE,
      total: matchingProductsEntries.length,
    };
  }

  const end = page * PRODUCTS_PAGE_SIZE;
  const start = end - PRODUCTS_PAGE_SIZE;

  const pagedProductEntries = matchingProductsEntries.slice(start, end);

  const catalogProducts = pagedProductEntries.map(([productId, product]) => {
    const houseRecord = HOUSES[product.house];

    if (houseRecord === undefined) {
      throw new Error(
        `product ${productId} references is messing ${product.house} `
      );
    }

    return {
      ...product,
      house: { id: product.house, name: houseRecord.name },
      id: productId,
    };
  });

  const productsResponse = {
    products: catalogProducts,
    page: page,
    limit: PRODUCTS_PAGE_SIZE,
    total: matchingProductsEntries.length,
  };
  return productsResponse;
}
