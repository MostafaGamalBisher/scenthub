import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
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

  return (
    <div>
      <ProductsList locale={validLocale} />
    </div>
  );
}
