import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import ProductsList from '@/app/[locale]/ProductsList';
import { getProducts } from '@/catalog/server/products';
import { parsePositiveInteger } from '@/lib/parsePositiveInteger';
import Link from 'next/link';
import { messages } from '@/i18n/messages';

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

  if (pageResult.ok === false) {
    return (
      <div>
        <p>{messages[locale].paginationError.message}</p>
        <Link href={`/${locale}`}>
          {messages[locale].paginationError.recoveryLabel}
        </Link>
      </div>
    );
  }

  const limitResult = parsePositiveInteger(limit);

  if (limitResult.ok === false) {
    return (
      <div>
        <p>{messages[locale].paginationError.message}</p>
        <Link href={`/${locale}`}>
          {messages[locale].paginationError.recoveryLabel}
        </Link>
      </div>
    );
  }

  const productsResponse = getProducts(pageResult.value, limitResult.value);

  return (
    <div>
      <ProductsList locale={locale} products={productsResponse.products} />
    </div>
  );
}
