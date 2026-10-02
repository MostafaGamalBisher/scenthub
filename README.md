# ScentHub

> **Status: In development**

ScentHub is a bilingual English/Arabic fragrance storefront being built incrementally with Next.js, TypeScript and React. It is my current main learning project, focused on reliable catalog modeling, localization and application boundaries before broader commerce functionality is added.

## Currently implemented

- English and Arabic locale routing with runtime validation.
- LTR and RTL document direction based on the active locale.
- A typed fragrance catalog covering houses, notes, concentrations, audiences, seasons, variants and localized product names.
- Conversion of keyed catalog data into render-ready products with stable product IDs.
- Localized product names, seasons, variant sizes, numbers and SAR prices.
- VAT-inclusive prices represented in integer halalas.
- Server-side catalog pagination with a fixed page size of 12 and response metadata.
- Shared validation of the `page` parameter for the page and products endpoint.
- Localized feedback and a recovery link when a page URL contains invalid pagination input.
- Local fonts and system-aware light/dark theme support.

## Current project boundaries

The application uses a small in-memory product catalog. Database persistence, authentication, favorites, cart, checkout and payments are not implemented yet.

Catalog pagination currently exists in the data layer; a complete pagination or load-more navigation interface is still to be built. The products endpoint is implemented, but the home page reads the catalog functions directly on the server.

## Technology

Next.js 16 App Router · TypeScript · React · Tailwind CSS · next-themes

Locale-aware number and SAR price formatting uses `Intl.NumberFormat`.

## Design decisions

- **Stable identifiers and localized labels:** catalog relationships and taxonomy use identifiers; presentation text is localized separately.
- **Currency representation:** variant prices use VAT-inclusive integer halalas, so SAR 115.00 is represented as `11500`.
- **Shared data access:** the home page and products endpoint call the same `getProducts` function.
- **Explicit validation results:** the pagination parser returns a `Result`. Invalid page URLs show localized recovery feedback; invalid API requests return HTTP 400.

## Project structure

| Location | Responsibility |
|---|---|
| `src/app/[locale]/` | Locale-aware pages and product presentation |
| `src/app/api/products/route.ts` | Products endpoint and request validation |
| `src/catalog/` | Domain types and fragrance taxonomy |
| `src/catalog/server/` | Catalog data and preparation, including pagination |
| `src/fonts/` | Local font configuration |
| `src/i18n/` | Supported locales, validation and localized messages |
| `src/lib/` | Number and price formatting, pagination parsing and result type |

## Run locally

```bash
npm install
npm run dev
```

Open [the English catalog](http://localhost:3000/en) or [the Arabic catalog](http://localhost:3000/ar).

Checks available in the repository:

```bash
npm run lint
npm run build
```

## Products API

### `GET /api/products`

| Parameter | Default | Behavior |
|---|---|---|
| `page` | `1` | Single positive safe integer consisting only of digits |

The page size is fixed at 12. A successful response contains `products`, `page`, `limit` and `total`.

Missing `page` uses the default. Repeated parameters, empty values, non-digit input, zero and unsafe integers return HTTP 400:

```json
{
  "ok": false,
  "error": "Expected a single value; repeated parameters are not allowed.",
  "parameter": "page"
}
```

For example, `/api/products?page=1&page=2` produces the error above.

The storefront validates the same parameter before reading catalog data. For example, `/ar?page=abc` shows Arabic error feedback and a link back to `/ar`.

