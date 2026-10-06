# ScentHub

> **Status: In development**

ScentHub is a bilingual English/Arabic fragrance storefront built with Next.js,
TypeScript and React. It is my main learning project, developed incrementally with
a focus on catalog modeling, localization and application boundaries before
broader commerce functionality is added.

## Run locally

Use Node.js 20.9 or later and npm. From the project directory:

```bash
npm ci
npm run dev
```

Open [the English catalog](http://localhost:3000/en/products) or
[the Arabic catalog](http://localhost:3000/ar/products). The home pages at `/en`
and `/ar` link to their respective catalogs; `/` redirects to `/en`.

No environment variables are required for the current implementation. The keys
in [`.env.example`](.env.example) are placeholders and are not used by the app.
Product images currently use remote placeholders from `placehold.co`.

## Currently implemented

- Validated English and Arabic locale routes with LTR/RTL document direction.
- A localized home page and a dedicated server-rendered products page.
- A typed catalog covering houses, notes, fragrance families, concentrations,
  audiences, seasons, product images and bottle variants.
- Stable product IDs and resolved house records prepared from keyed catalog data.
- Localized product and house names, release years, seasons, variant sizes,
  availability labels, numbers and SAR prices.
- VAT-inclusive prices stored as integer halalas and formatted with
  `Intl.NumberFormat`.
- Product images rendered with `next/image`, including localized fallback text
  for missing or failed images.
- URL-based house and season filtering, followed by pagination at 12 products
  per page.
- Shared query validation for the products page and API, with localized recovery
  links on the page and HTTP 400 responses from the API.
- Local fonts, semantic color and typography tokens, and system-aware light/dark
  theme support through `next-themes`.

## Current scope

The app uses an in-memory sample catalog with two products: Alexandria II and
Layton. Product presentation is still an early implementation. Interactive filter
controls, pagination navigation, search, product detail pages and language/theme
switching controls have not been built yet.

Database persistence, authentication, favorites, cart, checkout and payments are
not implemented. Variant availability is sample data, not live inventory.

[`design.md`](design.md) describes the proposed mobile-first, dark-first
storefront experience. It includes future screens and interactions and is not a
record of completed features. The current theme defaults to the system setting.

## Technology

| Tool              | Version / role             |
| ----------------- | -------------------------- |
| Next.js           | 16.3.3, App Router         |
| React             | 19.2.8                     |
| TypeScript        | 5, strict mode             |
| Tailwind CSS      | 4                          |
| next-themes       | System-aware theme support |
| ESLint / Prettier | Linting and formatting     |

## Catalog queries

Both `/{locale}/products` and `GET /api/products` support these query parameters:

| Parameter | Default     | Behavior                                                                             |
| --------- | ----------- | ------------------------------------------------------------------------------------ |
| `page`    | `1`         | One positive safe integer containing only digits `0–9`; repeated values are rejected |
| `house`   | All houses  | Repeatable, nonblank house IDs matched exactly                                       |
| `season`  | All seasons | Repeatable values: `winter`, `autumn`, `summer`, `spring`                            |

Multiple houses match **any** selected house. Multiple seasons match **any**
selected season. When both groups are supplied, a product must match both groups.
Filtering happens before pagination.

House IDs are case-sensitive and are not trimmed or checked against the house
registry. Unknown nonblank IDs are accepted and simply match no products. Season
values must match the lowercase values above exactly. Blank or whitespace-only
house values and invalid season values are rejected.

Examples:

```text
/en/products?house=xerjoff&season=winter
/ar/products?house=xerjoff&house=parfums-de-marly
/en/products?season=winter&season=spring
/api/products?page=1&house=xerjoff&season=winter
```

Invalid catalog-page queries show localized feedback and a link back to the
unfiltered catalog. For example, `/ar/products?page=abc` links back to
`/ar/products`. Valid queries with no matches or a page beyond the available
results show the localized empty state.

## Products API

### `GET /api/products`

The endpoint uses the same catalog function and validators as the products page.
It does not require authentication or an API key. Product records include both
English and Arabic labels; no locale parameter is required.

A successful response contains:

| Field      | Meaning                                                                                 |
| ---------- | --------------------------------------------------------------------------------------- |
| `products` | Array of catalog products with stable `id` values and houses resolved to `{ id, name }` |
| `page`     | Requested page, or `1` when omitted                                                     |
| `limit`    | Fixed page size of `12`                                                                 |
| `total`    | Number of products matching the filters, before pagination                              |

For example, `/api/products?page=2` currently returns HTTP 200 with:

```json
{
  "products": [],
  "page": 2,
  "limit": 12,
  "total": 2
}
```

Missing `page` uses the default. Repeated page parameters, empty values, non-digit
input, zero and unsafe integers return HTTP 400. Blank house values and invalid
seasons also return HTTP 400, with `parameter` identifying the invalid field.

For example, `/api/products?page=1&page=2` returns:

```json
{
  "ok": false,
  "error": "Expected a single value; repeated parameters are not allowed.",
  "parameter": "page"
}
```

## Design decisions

- **Stable IDs and localized labels:** catalog relationships use identifiers;
  English and Arabic presentation values are stored separately.
- **Currency representation:** prices use VAT-inclusive integer halalas, so
  SAR 115.00 is stored as `11500`.
- **Shared data access:** the products page calls `getProducts` directly on the
  server; the API exposes the same data function through HTTP.
- **Validation at request boundaries:** parsers and validators return a `Result`
  so pages and API handlers can present errors in their respective formats.
- **Separate data and presentation:** catalog records are filtered, paginated
  and enriched with house information before being passed to product components.

## Project structure

| Location                                 | Responsibility                                                   |
| ---------------------------------------- | ---------------------------------------------------------------- |
| `src/app/[locale]/page.tsx`              | Localized home page and catalog link                             |
| `src/app/[locale]/layout.tsx`            | Locale validation, document direction, fonts and theme provider  |
| `src/app/[locale]/products/page.tsx`     | Catalog query validation and server-side product retrieval       |
| `src/app/[locale]/products/_components/` | Product list, images, seasons and variants                       |
| `src/app/api/products/route.ts`          | Products endpoint and HTTP error responses                       |
| `src/app/globals.css`                    | Semantic theme and typography tokens                             |
| `src/catalog/`                           | Domain types and fragrance taxonomy                              |
| `src/catalog/server/`                    | Sample data, filtering, pagination and house resolution          |
| `src/fonts/`                             | Local font assets and configuration                              |
| `src/i18n/`                              | Supported locales, locale validation and translated messages     |
| `src/lib/`                               | Number/price formatting, query validators and shared result type |

## Development

Available commands:

```bash
npm run lint      # Run ESLint
npm run build     # Create a production build
npm run start     # Serve the production build after building
npm run format    # Format the repository with Prettier
```

There is currently no automated test suite or `test` script. Before submitting
changes, run lint and build checks and verify affected behavior in both locales.
Keep translated messages, RTL behavior and integer-halalas pricing consistent.

Follow [`AGENTS.md`](AGENTS.md) when working with coding agents. Before changing
Next.js code, read the relevant documentation shipped with the installed version
under `node_modules/next/dist/docs/`.
