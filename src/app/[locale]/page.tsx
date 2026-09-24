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

  const pageResult = parsePositiveInteger(page);
  const limitResult = parsePositiveInteger(limit);

  if (pageResult.ok === false) {
    return <p>{pageResult.error}</p>; //it's a placeHolder for now i am just trying to understand the logic
  }

  if (limitResult.ok === false) {
    return <p>{limitResult.error}</p>; //it's a placeHolder for now i am just trying to understand the logic
  }

  const productsResponse = getProducts(pageResult.value, limitResult.value);

  return (
    <div>
      <ProductsList locale={locale} products={productsResponse.products} />
    </div>
  );
}
