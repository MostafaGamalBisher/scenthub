import { getProducts } from '@/catalog/server/products';
import { parsePositiveInteger } from '@/lib/parsePositiveInteger';

export function GET(request: Request) {
  const url = new URL(request.url);

  const page = url.searchParams.getAll('page');
  const limit = url.searchParams.getAll('limit');

  const pageArrayLength = page.length;
  const limitArrayLength = limit.length;

  let rawPageValue: string | string[] | undefined;

  let rawLimitValue: string | string[] | undefined;

  if (pageArrayLength === 0) {
    rawPageValue = undefined;
  } else if (pageArrayLength === 1) {
    rawPageValue = page[0];
  } else {
    rawPageValue = page;
  }

  if (limitArrayLength === 0) {
    rawLimitValue = undefined;
  } else if (limitArrayLength === 1) {
    rawLimitValue = limit[0];
  } else {
    rawLimitValue = limit;
  }

  const pageNumberResult = parsePositiveInteger(rawPageValue);
  const limitNumberResult = parsePositiveInteger(rawLimitValue);

  if (pageNumberResult.ok === false) {
    return Response.json(
      { ok: false, error: pageNumberResult.error, parameter: 'page' },
      { status: 400 }
    );
  }

  if (limitNumberResult.ok === false) {
    return Response.json(
      { ok: false, error: limitNumberResult.error, parameter: 'limit' },
      { status: 400 }
    );
  }

  const products = getProducts(pageNumberResult.value, limitNumberResult.value);

  return Response.json(products);
}
