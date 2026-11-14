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

  const loadMoreHandler = () => {
    const nextPage = setCurrentPage(currentPage + 1);
    const params = new URLSearchParams(window.location.search);

    params.set('page', `${nextPage}`);
    params.append('house', `${houseIds.map((houseId) => houseId)}`);
    params.append('season', `${seasons.map((season) => season)}`);
  };

  return (
    <div>
      <ProductsList locale={locale} products={accumulativeProducts} />
      <button onClick={loadMoreHandler}>Load More</button>
    </div>
  );
}
