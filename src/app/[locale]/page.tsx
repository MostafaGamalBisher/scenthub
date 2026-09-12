import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import ProductsList from '@/app/[locale]/ProductsList';
import { getProducts } from '@/catalog/server/products';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const productsResponse = getProducts(1, 1);

  return (
    <div>
      <ProductsList locale={locale} products={productsResponse.products} />
    </div>
  );
}
