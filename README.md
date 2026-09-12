# ScentHub

> **Status: In development**

ScentHub is a bilingual English/Arabic fragrance e-commerce application being built incrementally with Next.js, TypeScript, and React. The project is currently focused on establishing reliable domain modeling, localization, and application boundaries before broader commerce functionality is added.

## Currently implemented

- English and Arabic locale routing with runtime validation.
- LTR and RTL document direction based on the active locale.
- A typed fragrance catalog covering houses, notes, concentrations, audiences, seasons, variants, and localized product names.
- Conversion of keyed catalog data into render-ready products with stable product IDs.
- Localized product names, seasons, variant sizes, numbers, and SAR prices.
- VAT-inclusive prices stored as integer halalas to preserve currency precision.
- Local fonts and system-aware light/dark theme support.

## Technology

- Next.js 16 App Router
- TypeScript
- React
- Tailwind CSS
- `Intl.NumberFormat` for locale-aware formatting

## Current project boundaries

ScentHub is not yet a complete storefront. The current repository uses a small in-memory product catalog and does not yet include a completed API layer, database, authentication, cart, checkout, payment integration, or production deployment. These capabilities will be introduced as the architecture and learning phase reach them.

## Project structure

```text
src/
├── app/[locale]/       # Locale-aware pages and product presentation
├── catalog/            # Product data, domain types, houses, notes, taxonomy
│   └── server/         # Server-side catalog preparation
├── fonts/              # Local font configuration
├── i18n/               # Supported locales, validation, localized messages
└── lib/                # Locale-aware number and price formatting
```

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/en` or `http://localhost:3000/ar`.
