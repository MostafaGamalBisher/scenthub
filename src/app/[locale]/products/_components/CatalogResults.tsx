'use client';

import type { ProductsResponse } from '@/catalog/products';
import type { Locale } from '@/i18n/config';
import ProductsList from '@/app/[locale]/products/_components/ProductsList';
import { useState } from 'react';
import type { Season } from '@/catalog/taxonomy';
import type { HouseId } from '@/catalog/houses';

interface CatalogResultsProps {
  initialResponse: ProductsResponse;
  seasons: readonly Season[];
  houseIds: readonly HouseId[];
  locale: Locale;
}

export default function CatalogResults({
  locale,
  initialResponse,
  seasons,
  houseIds,
}: CatalogResultsProps) {
  const [accumulativeProducts, setAccumulativeProducts] = useState(
    initialResponse.products
  );

  return (
    <div>
      <ProductsList locale={locale} products={accumulativeProducts} />
      {/* <button onClick={}>Load More</button> */}
    </div>
  );
}
