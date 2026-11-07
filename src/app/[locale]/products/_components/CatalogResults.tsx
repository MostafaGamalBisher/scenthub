'use client';

import type { CatalogProduct } from '@/catalog/products';
import type { Locale } from '@/i18n/config';
import ProductsList from '@/app/[locale]/products/_components/ProductsList';
import { useState } from 'react';
import { getProducts } from '@/catalog/server/products';

interface CatalogResultsProps {
  products: readonly CatalogProduct[];
  locale: Locale;
}

export default function CatalogResults({
  locale,
  products,
}: CatalogResultsProps) {
  const [accumulativeProducts, setAccumulativeProducts] = useState(products);

  const loadMoreHandler = (currentProducts) => {
    const newProductsBatch = getProducts();
    const addMoreProducts = [...currentProducts];
  };

  return (
    <div>
      <ProductsList locale={locale} products={accumulativeProducts} />
      <button onClick={}>Load More</button>
    </div>
  );
}
