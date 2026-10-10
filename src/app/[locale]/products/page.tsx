import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import ProductsContent from '@/app/[locale]/products/_components/ProductsContent';
import { Suspense } from 'react';

interface CatalogSearchParams {
  page?: string | string[];
  house?: string | string[];
  season?: string | string[];
}

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<CatalogSearchParams>;
}

export default async function ProductsPage({
  params,
  searchParams,
}: ProductsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <ProductsContent locale={locale} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
