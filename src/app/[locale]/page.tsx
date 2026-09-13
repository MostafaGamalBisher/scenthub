import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import ProductsList from '@/app/[locale]/ProductsList';
import { getProducts } from '@/catalog/server/products';
import { parsePositiveInteger } from '@/lib/parsePositiveInteger';

interface PaginationSearchParams {
  page?: string | string[];
  limit?: string | string[];
}

interface HomeProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<PaginationSearchParams>;
}

export default async function Home({ params, searchParams }: HomeProps) {
  const { locale } = await params;
  const { page, limit } = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const parsedPageValue = parsePositiveInteger(page);

  const parsedLimitValue = parsePositiveInteger(limit);

  const productsResponse = getProducts(parsedPageValue, parsedLimitValue);

  return (
    <div>
      <ProductsList locale={locale} products={productsResponse.products} />
    </div>
  );
}
