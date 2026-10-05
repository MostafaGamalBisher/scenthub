import { getProducts } from '@/catalog/server/products';
import { parsePositiveInteger } from '@/lib/parsePositiveInteger';
import { validateHouseIds } from '@/lib/validateHouseIds';
import { validateSeasons } from '@/lib/validateSeasons';

export function GET(request: Request) {
  const url = new URL(request.url);

  const page = url.searchParams.getAll('page');
  const house = url.searchParams.getAll('house');
  const season = url.searchParams.getAll('season');

  const pageArrayLength = page.length;

  let rawPageValue: string | string[] | undefined;

  if (pageArrayLength === 0) {
    rawPageValue = undefined;
  } else if (pageArrayLength === 1) {
    rawPageValue = page[0];
  } else {
    rawPageValue = page;
  }

  const pageNumberResult = parsePositiveInteger(rawPageValue);

  if (pageNumberResult.ok === false) {
    return Response.json(
      { ok: false, error: pageNumberResult.error, parameter: 'page' },
      { status: 400 }
    );
  }

  const houseIdResult = validateHouseIds(house);

  if (houseIdResult.ok === false) {
    return Response.json(
      { ok: false, error: houseIdResult.error, parameter: 'house' },
      { status: 400 }
    );
  }

  const seasonResult = validateSeasons(season);

  if (seasonResult.ok === false) {
    return Response.json(
      { ok: false, error: seasonResult.error, parameter: 'season' },
      { status: 400 }
    );
  }

  const products = getProducts(
    pageNumberResult.value,
    houseIdResult.value,
    seasonResult.value
  );

  return Response.json(products);
}
