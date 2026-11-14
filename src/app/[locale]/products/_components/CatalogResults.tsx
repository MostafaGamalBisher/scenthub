'use client';

import type { ProductsResponse } from '@/catalog/products';
import type { Locale } from '@/i18n/config';
import ProductsList from '@/app/[locale]/products/_components/ProductsList';
import { useState } from 'react';
import type { Season } from '@/catalog/taxonomy';
import type { HouseId } from '@/catalog/houses';
import { messages } from '@/i18n/messages';

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

  const [isLoading, setIsLoading] = useState(false);

  const [loadMoreFailed, setLoadMoreFailed] = useState(false);

  const loadMoreHandler = async () => {
    setIsLoading(true);
    setLoadMoreFailed(false);

    const nextPage = currentPage + 1;
    const params = new URLSearchParams();

    params.set('page', `${nextPage}`);
    houseIds.forEach((houseId) => params.append('house', houseId));
    seasons.forEach((season) => params.append('season', season));

    const newQuery = params.toString();

    try {
      const response = await fetch(`/api/products?${newQuery}`);

      if (!response.ok) {
        setLoadMoreFailed(true);
        throw new Error(`Load More request failed (HTTP ${response.status})`);
      }

      const newBatch = await response.json();

      setAccumulativeProducts((prev) => [...prev, ...newBatch.products]);
      setCurrentPage(newBatch.page);

      const newURL = `${window.location.pathname}?${newQuery}`;

      window.history.replaceState(null, '', newURL);
    } catch {
      setLoadMoreFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ProductsList locale={locale} products={accumulativeProducts} />
      <button
        onClick={loadMoreHandler}
        disabled={
          accumulativeProducts.length >= initialResponse.total || isLoading
        }
      >
        Load More
      </button>
      {loadMoreFailed && <p>{messages[locale].loadMoreFailed}</p>}
    </div>
  );
}
