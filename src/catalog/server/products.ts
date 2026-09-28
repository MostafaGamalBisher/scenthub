import type { ProductsResponse } from '@/catalog/products';
import { PRODUCTS } from '@/catalog/server/product-data';
import { HOUSES } from './house-data';

const PRODUCTS_PAGE_SIZE = 12;

export function getProducts(page: number = 1): ProductsResponse {
  const productsEntries = Object.entries(PRODUCTS);

  const catalogProducts = productsEntries.map(([productId, product]) => ({
    ...product,
    house: { id: product.house, name: HOUSES[product.house].name },
    id: productId,
  }));

  const end = page * PRODUCTS_PAGE_SIZE;
  const start = end - PRODUCTS_PAGE_SIZE;

  const slicedCatalogProducts = catalogProducts.slice(start, end);

  const productsResponse = {
    products: slicedCatalogProducts,
    page: page,
    limit: PRODUCTS_PAGE_SIZE,
    total: catalogProducts.length,
  };
  return productsResponse;
}
