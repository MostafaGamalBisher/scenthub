import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import ProductsList from '@/app/[locale]/products/_components/ProductsList';
import { getProducts } from '@/catalog/server/products';
import { parsePositiveInteger } from '@/lib/parsePositiveInteger';
import Link from 'next/link';
import { messages } from '@/i18n/messages';
import { validateHouseIds } from '@/lib/validateHouseIds';
import { validateSeasons } from '@/lib/validateSeasons';
import SeasonFilter from './_components/SeasonFilter';

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
  const { page, house, season } = await searchParams;

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

  let selectedSeasons: string[];

  if (season === undefined) {
    selectedSeasons = [];
  } else if (typeof season === 'string') {
    selectedSeasons = [season];
  } else {
    selectedSeasons = season;
  }

  if (pageResult.ok === false) {
    return (
      <div>
        <p>{messages[locale].paginationError.message}</p>
        <Link href={`/${locale}/products`}>
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
        <Link href={`/${locale}/products`}>
          {messages[locale].blankHouseError.recoveryLabel}
        </Link>
      </div>
    );
  }

  const validatedSelectedSeason = validateSeasons(selectedSeasons);

  if (validatedSelectedSeason.ok === false) {
    return (
      <div>
        <p>{messages[locale].seasonError.message}</p>
        <Link href={`/${locale}/products`}>
          {messages[locale].seasonError.recoveryLabel}
        </Link>
      </div>
    );
  }

  const productsResponse = getProducts(
    pageResult.value,
    validatedHouseIds.value,
    validatedSelectedSeason.value
  );

  return (
    <div>
      <SeasonFilter
        selectedSeasons={validatedSelectedSeason.value}
        locale={locale}
      />
      <ProductsList locale={locale} products={productsResponse.products} />
    </div>
  );
}
