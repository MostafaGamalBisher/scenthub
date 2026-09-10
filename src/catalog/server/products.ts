import { PRODUCTS, type CatalogProduct } from '@/catalog/products';

export function getProducts(): CatalogProduct[] {
  const productsEntries = Object.entries(PRODUCTS);

  const catalogProducts = productsEntries.map(([productId, product]) => ({
    ...product,
    id: productId,
  }));

  return catalogProducts;
}
