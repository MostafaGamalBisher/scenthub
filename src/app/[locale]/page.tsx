import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import { PRODUCTS, type Product } from '@/catalog/products';
import ProductsList from './ProductsList';
import type { Locale } from '@/i18n/config';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const validLocale: Locale = locale;
  const productsArray = Object.entries(PRODUCTS);

  return (
    <div>
      <p className="font-text text-body leading-body font-semibold">
        {PRODUCTS['alexandria-ii'].name[locale]}
      </p>
      <ProductsList locale={validLocale} productsList={productsArray} />
    </div>
  );
}
