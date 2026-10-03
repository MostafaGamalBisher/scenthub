import type { ProductsResponse } from '@/catalog/products';
import { PRODUCTS } from '@/catalog/server/product-data';
import { HOUSES } from './house-data';

const PRODUCTS_PAGE_SIZE = 12;

export function getProducts(page: number = 1): ProductsResponse {
  const productsEntries = Object.entries(PRODUCTS);

  const totalPages = Math.ceil(productsEntries.length / PRODUCTS_PAGE_SIZE);

  if (page > totalPages) {
    return {
      products: [],
      page: page,
      limit: PRODUCTS_PAGE_SIZE,
      total: productsEntries.length,
    };
  }

  const end = page * PRODUCTS_PAGE_SIZE;
  const start = end - PRODUCTS_PAGE_SIZE;

  const slicedCatalogProducts = productsEntries.slice(start, end);

  const catalogProducts = slicedCatalogProducts.map(([productId, product]) => ({
    ...product,
    house: { id: product.house, name: HOUSES[product.house].name },
    id: productId,
  }));

  const productsResponse = {
    products: catalogProducts,
    page: page,
    limit: PRODUCTS_PAGE_SIZE,
    total: productsEntries.length,
  };
  return productsResponse;
}
