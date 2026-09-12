import { PRODUCTS, type ProductsResponse } from '@/catalog/products';

export function getProducts(
  page: number = 1,
  limit: number = 12
): ProductsResponse {
  const productsEntries = Object.entries(PRODUCTS);

  const catalogProducts = productsEntries.map(([productId, product]) => ({
    ...product,
    id: productId,
  }));

  const end = page * limit;
  const start = end - limit;

  const slicedCatalogProducts = catalogProducts.slice(start, end);

  const productsResponse = {
    products: slicedCatalogProducts,
    page: page,
    limit: limit,
    total: catalogProducts.length,
  };
  return productsResponse;
}
