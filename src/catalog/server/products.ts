import type { ProductsResponse } from '@/catalog/products';
import { PRODUCTS } from '@/catalog/server/product-data';
import { HOUSES } from './house-data';
import type { HouseId } from '@/catalog/houses';

const PRODUCTS_PAGE_SIZE = 12;

export function getProducts(
  page: number = 1,
  houseIds: readonly HouseId[] = []
): ProductsResponse {
  const productsEntries = Object.entries(PRODUCTS);

  let matchingProductsEntries;

  if (houseIds.length === 0) {
    matchingProductsEntries = productsEntries;
  } else {
    matchingProductsEntries = productsEntries.filter(([, value]) =>
      houseIds.includes(value.house)
    );
  }

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

  const catalogProducts = pagedProductEntries.map(([productId, product]) => ({
    ...product,
    house: { id: product.house, name: HOUSES[product.house].name },
    id: productId,
  }));

  const productsResponse = {
    products: catalogProducts,
    page: page,
    limit: PRODUCTS_PAGE_SIZE,
    total: matchingProductsEntries.length,
  };
  return productsResponse;
}
