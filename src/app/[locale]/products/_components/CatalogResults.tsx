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

  const [currentPage, setCurrentPage] = useState(initialResponse.page);

  const loadMoreHandler = async () => {
    const nextPage = currentPage + 1;
    const params = new URLSearchParams();

    params.set('page', `${nextPage}`);
    houseIds.forEach((houseId) => params.append('house', houseId));
    seasons.forEach((season) => params.append('season', season));

    const newQuery = params.toString();

    const response = await fetch(`/api/products?${newQuery}`);

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    const newBatch = await response.json();

    console.log(newBatch);

    console.log(newBatch.page);
    console.log(newBatch.products.length);
  };

  return (
    <div>
      <ProductsList locale={locale} products={accumulativeProducts} />
      <button onClick={loadMoreHandler}>Load More</button>
    </div>
  );
}
