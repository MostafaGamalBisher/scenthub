import { isLocale } from '@/i18n/config';
import { messages } from '@/i18n/messages';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div>
      <h1>ScentHub</h1>
      <p>{messages[locale].home.welcome}</p>
      <Link href={`/${locale}/products`}>
        {messages[locale].home.browseProducts}
      </Link>
    </div>
  );
}
