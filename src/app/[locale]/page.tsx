import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import ProductsList from '@/app/[locale]/ProductsList';
import { getProducts } from '@/catalog/server/products';
import { parsePositiveInteger } from '@/lib/parsePositiveInteger';
import Link from 'next/link';
import { messages } from '@/i18n/messages';
import { validateHouseIds } from '@/lib/validateHouseIds';
import { validateSeasons } from '@/lib/validateSeasons';

interface PaginationSearchParams {
  page?: string | string[];
  house?: string | string[];
}

interface HomeProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<PaginationSearchParams>;
}

export default async function Home({ params, searchParams }: HomeProps) {
  const { locale } = await params;
  const { page, house } = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const pageResult = parsePositiveInteger(page);

  let houseIds: string[];

  if (house === undefined) {
    houseIds = [];
  } else if (typeof house === 'string') {
    houseIds = [house];
  } else {
    houseIds = house;
  }

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

  const validatedHouseIds = validateHouseIds(houseIds);

  if (validatedHouseIds.ok === false) {
    return (
      <div>
        <p>{messages[locale].blankHouseError.message}</p>
        <Link href={`/${locale}`}>
          {messages[locale].blankHouseError.recoveryLabel}
        </Link>
      </div>
    );
  }

  const productsResponse = getProducts(
    pageResult.value,
    validatedHouseIds.value
  );

  return (
    <div>
      <ProductsList locale={locale} products={productsResponse.products} />
    </div>
  );
}
