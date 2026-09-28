import { getProducts } from '@/catalog/server/products';
import { parsePositiveInteger } from '@/lib/parsePositiveInteger';

export function GET(request: Request) {
  const url = new URL(request.url);

  const page = url.searchParams.getAll('page');

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

  const products = getProducts(pageNumberResult.value);

  return Response.json(products);
}
