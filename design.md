# ScentHub — Mobile-First, Dark-First Design Brief for Claude

## 1. Assignment

Design a polished, restrained, bilingual fragrance storefront for ScentHub. Produce a coherent design system and responsive screen designs that developers can implement in this repository. Treat this document as the design brief and `src/app/globals.css` as the authoritative source for color and typography.

The experience should help shoppers discover fragrances, compare relevant details, choose a bottle size, and understand the price before adding an item to their bag. **Design mobile first and dark mode first.** Establish the complete shopping journey at 390px in dark mode, in both English and Arabic, before expanding it to tablet, desktop, and light mode.

Mobile dark mode is the reference experience for hierarchy, spacing, interaction, imagery, and component states. Light mode retains the same information and capabilities through the existing semantic mappings. Desktop earns additional columns and navigation space only when the content fits comfortably.

Deliver a specific, buildable design with reusable components, realistic content, interaction annotations, and complete states. Avoid generic luxury templates, decorative complexity, and unsupported commercial claims.

### Required design sequence

1. Build the dark component foundations and a 390px home → collection → product → bag journey using real catalog content.
2. Resolve English and Arabic layouts together. Stress-test the same journey at 320px and 360px, including long labels and an open software keyboard.
3. Complete touch, keyboard, loading, empty, error, and selection states in the mobile dark reference.
4. Expand the resolved layouts to 768px and 1440px without changing their information hierarchy or removing mobile capabilities.
5. Apply the existing light-theme mappings and verify contrast, image presentation, and focus states independently.

Do not use a desktop/light mockup as the master and compress or invert it afterward. When documenting tradeoffs, prioritize a readable mobile shopping decision over decorative density.

## 2. Project Evidence and Boundaries

This brief is based on the repository at commit `19081c1`. The project is an early storefront foundation, not an implemented commerce application.

| Source | Existing foundation | Design implication |
| --- | --- | --- |
| `package.json` | Next.js 16.3.3, React 19, TypeScript, Tailwind CSS 4, next-themes | Keep the handoff compatible with semantic tokens and reusable React components. |
| `src/app/globals.css` | Warm neutral/gold colors, theme mappings, typography roles, Arabic leading | Preserve this system instead of creating a replacement palette or type scale. |
| `src/app/[locale]/layout.tsx` | Validated `en`/`ar` routes, language/direction attributes, system theme support | Design both directions and all three theme preferences: system, light, dark. |
| `next.config.ts` | `/` redirects to `/en` | English is the current default; language switching must be explicit. |
| `src/app/[locale]/page.tsx` | A styled ScentHub placeholder | All storefront layouts described below are proposed work. |
| `src/catalog/*` | Localized products, houses, notes, concentration, audience, season, bottle variants | Use these fields to drive discovery and product information. |
| `src/i18n/messages.ts` | Season translations only | Other interface copy needs new English and Arabic messages. |
| `src/lib/format-price.ts` | Locale-aware SAR formatting from integer halalas | Use formatted prices consistently; catalog prices already include VAT. |
| `src/fonts/fonts.ts` | EB Garamond is registered through next/font/local | Other supplied font files still need loading and script coverage verified. |

There are currently two products, five house records, and four note records. Some house and note records have no associated products. No product photography, descriptions, stock service, cart, checkout, authentication, reviews, payment integration, shipping policy, or returns policy is implemented in the inspected project.

### Scope

- Primary designs: home, collection/search results, product detail, and a proposed shopping bag experience.
- Supporting designs: navigation, search, filters, size selection, theme/language controls, empty/error/loading states, and not-found page.
- Future scope: checkout, accounts, wishlists, order tracking, reviews, promotions, and editorial content. Do not let these dominate the first release.
- Clearly label unimplemented interactions as prototype behavior. A shopping bag design is not evidence that purchasing is available.
- Do not invent discounts, bestseller status, verified reviews, authenticity guarantees, delivery estimates, free-shipping thresholds, or payment badges.

## 3. Creative Direction

Aim for a quiet fragrance boutique at dusk: warm charcoal canvas, softly separated surfaces, pale neutral text, and restrained gold actions. Let bottle silhouettes, precise typography, and purposeful space carry the identity. Use editorial composition without hiding the shopping task.

Create hierarchy through alignment, spacing, font family, and weight. Reserve gold for actions and small accents. Keep the interface predominantly neutral. Use one dominant action in each decision area.

Avoid oversized display text outside the existing scale, full-screen introductory animations, autoplay carousels, excessive cards, glass effects, ornamental gradients, heavy shadows, and a gold border around every element. Do not fill an empty catalog with repeated products or invented inventory.

Use “ScentHub” as a typographic wordmark for the first design. A new logo is optional future work, not a prerequisite.

### Dark-mode composition

- Use `bg-page` as the dominant canvas and `bg-surface` for image wells, controls, and overlays that need separation. Keep ordinary product metadata directly on the page instead of wrapping every item in another panel.
- Establish depth through surface contrast and measured borders. Avoid depending on black shadows to separate dark layers.
- Give bottle edges and transparent glass enough contrast against the image well. Use approved cutouts or intentionally composed photography; do not tint, invert, or reduce the opacity of product assets to force a dark appearance.
- Keep bright photographic backgrounds contained within a deliberate image well. Do not let large white asset rectangles become accidental focal points across the page.
- Use gold for the current action or selection, with dark `text-on-action` on gold fills. Avoid glowing controls, luminous text, and large gold backgrounds.
- Check the design on an ordinary phone at moderate brightness. Secondary information must remain readable without relying on the ideal contrast of a design canvas.

### Theme preference contract

The proposed first-visit theme is **Dark** when there is no saved preference. Respect an explicitly saved Light, Dark, or System preference on later visits; System follows the device setting. Keep all three choices available and retain the choice across locale changes.

The repository currently uses `defaultTheme="system"`. Changing that default to dark is an implementation requirement of this revised brief, not a change already made to the app. Preserve the existing provider and `.dark` semantic overrides. Do not swap the root palette, remove light mode, or force dark mode against an explicit preference. The reference prototype opens in dark mode, and initial page paint should match the resolved preference without a light flash.

## 4. Mandatory Color System

### Exact primitives

Preserve these OKLCH values. They are reference values for design variables, not colors to use directly in components.

| Primitive | Value | Primitive | Value |
| --- | --- | --- | --- |
| gray-050 | `oklch(0.97 0.008 85)` | gold-100 | `oklch(0.95 0.035 88)` |
| gray-100 | `oklch(0.88 0.008 85)` | gold-300 | `oklch(0.85 0.09 86)` |
| gray-200 | `oklch(0.8 0.008 85)` | gold-500 | `oklch(0.72 0.13 84)` |
| gray-300 | `oklch(0.71 0.008 85)` | gold-700 | `oklch(0.55 0.11 80)` |
| gray-400 | `oklch(0.63 0.008 85)` | gold-900 | `oklch(0.35 0.07 78)` |
| gray-500 | `oklch(0.54 0.008 85)` | | |
| gray-600 | `oklch(0.46 0.008 85)` | | |
| gray-700 | `oklch(0.37 0.008 85)` | | |
| gray-800 | `oklch(0.28 0.008 85)` | | |
| gray-900 | `oklch(0.2 0.008 85)` | | |

### Semantic variables and intended usage

| Semantic token | Light | Dark | Usage |
| --- | --- | --- | --- |
| page | gray-050 | gray-900 | Main canvas |
| surface | gray-100 | gray-800 | Inputs, image wells, grouped secondary areas |
| line | gray-200 | gray-700 | Quiet separators and resting borders |
| line-strong | gray-300 | gray-600 | Stronger structural boundaries |
| muted | gray-500 | gray-400 | Supporting text, only on verified backgrounds |
| secondary | gray-700 | gray-200 | Secondary content |
| primary | gray-900 | gray-100 | Headings and main text |
| action | gold-500 | gold-300 | Primary action fill |
| on-action | gray-900 | gray-900 | Text/icons on action fill |
| focus | gold-500 | gold-300 | Focus indicator |
| accent-line | gold-500 | gold-300 | Small selected/decorative accents |
| accent-subtle | gold-100 | gold-900 | Restrained selection tint |

### Rules

- Components consume semantic utilities such as `bg-page`, `bg-surface`, `text-primary`, `text-secondary`, `border-line`, and `ring-focus`.
- Preserve the existing primitive → semantic → Tailwind exposure architecture. Do not insert raw hex/OKLCH values or default gray/color utilities into components.
- Do not use gold for body text, product names, headings, or resting input borders.
- Use identical semantic roles in both themes. Do not manually invert artwork or add separate per-component color schemes.
- Keep input borders quieter than placeholder text while ensuring required control boundaries remain perceivable. Use persistent labels; placeholders never replace them.
- No success/error palette exists. Communicate status with explicit text and an appropriate icon using readable neutral tokens. Any future status colors require a documented semantic-token proposal for both themes.
- Never silently change the palette to fix a design. Record a measured contrast issue and propose the smallest semantic change separately if existing tokens cannot meet the requirement.
- If the design tool needs RGB/hex, convert the source values accurately and retain the OKLCH source and semantic name in annotations. Do not choose visually similar replacements.

## 5. Typography

The intended display pairing is EB Garamond for Latin and Amiri for Arabic. The intended interface pairing is Work Sans for Latin and IBM Plex Sans Arabic for Arabic. Geist is loaded in the current layout but is not the intended storefront type system.

| Role | Size | Family utility | Weight | English leading | Arabic leading |
| --- | --- | --- | --- | --- | --- |
| Page title / product detail name | 1.9531rem | font-display | 400 | 1.15 | 1.45 |
| Section heading | 1.5625rem | font-display | 400 | 1.25 | 1.55 |
| Product detail price | 1.25rem | font-text | 600 | 1.3 | 1.6 |
| Body, house name, card price | 1rem | font-text | 400 | 1.4 | 1.8 |
| Navigation, buttons, form labels | 1rem | font-text | 500 | 1.4 | 1.8 |
| Product card name | 1rem | font-display | 400 | 1.4 | 1.8 |
| Helper text, validation, VAT note | 0.8rem | font-text | 400 | 1.45 | 1.85 |

- Pair each size with its matching leading utility, for example `text-body leading-body`. Locale selects line height through CSS; components do not choose a different type size for Arabic.
- Use only the five existing size roles. Build emphasis through composition instead of introducing a huge hero font.
- Display text uses the supplied regular weight. Do not synthesize medium/semibold display faces.
- Never apply letter spacing to Arabic. Avoid all-uppercase navigation and long tracked labels as a brand dependency.
- Allow headings, labels, and buttons to grow for Arabic text. Do not use fixed heights that clip diacritics.
- The CSS documents optical adjustments of 114% for Amiri and 108% for IBM Plex Sans Arabic. These are intended font-loading adjustments, not permission to enlarge individual Arabic components.
- Only EB Garamond is currently wired up. The CSS comments describe intended font coverage, but do not establish that the other fonts or unicode ranges are implemented. Verify actual font selection, supplied weights, optical adjustment, and generated leading utilities during implementation.

## 6. Mobile-First Layout and Responsive Rules

These layout measurements are proposed design decisions; color and typography remain the existing system.

- Use a centered content container with a maximum width of 80rem.
- Use page gutters of 1rem on narrow screens, 1.5rem from 40rem, and 2.5rem from 64rem.
- Base spacing on 0.25rem increments. Prefer 0.5, 0.75, 1, 1.5, 2, 3, and 4rem for repeated gaps.
- Use section spacing of 2.5–3rem on mobile and 4–5rem on desktop. Reduce empty space when the catalog is sparse.
- Use restrained corner radii: 0.25rem for controls and image wells, 0.5rem for overlays. Pills are reserved for compact removable filters.
- Default borders are 1px. Avoid shadows on every card; reserve subtle elevation for overlapping surfaces such as dialogs.
- Product images use a consistent 4:5 well with contained bottle imagery and equal optical scale. Never stretch or crop away the bottle identity.
- Collection grids progress from one column on very narrow screens to two from 24rem, three from 48rem, and four from 64rem when content allows. Keep sparse results at normal card width rather than stretching two products across a large screen.
- Desktop product detail uses two columns, approximately 55% imagery and 45% purchase information. Mobile stacks imagery, product identity, price, variants, purchase action, and details.
- At small widths, replace expanded navigation and filter sidebars with clearly labeled menu/filter controls. Keep search discoverable.
- Prefer inline price information beside the purchase action. Add a sticky mobile purchase bar only if it improves a long product page; ensure it never covers content, keyboard focus, or safe areas.

### Mobile baseline

- Start with a single normal document flow. Use minimum-width enhancements as space becomes available; do not depend on a desktop sidebar or hover interaction for a core action.
- Use minimum 3rem-high primary buttons, search fields, and size options, with at least 44×44px targets for compact controls. Let translated labels increase height instead of clipping or shrinking text.
- Keep the main purchase action full width in its mobile decision area. Group it with the exact selected price, size, and VAT note so the shopper need not remember information from another screen region.
- Product cards retain readable names and starting prices. Allow wrapping and content-driven height; at narrow widths or increased text size, fall back to one column before reducing type or truncating essential information.
- Use a restrained mobile hero. At the 390×844 reference size with default text settings, aim to expose the title, browse action, and start of the collection without requiring the shopper to scroll past a full-screen image. Treat this as a composition target, not a fixed-height constraint.
- Avoid simultaneous sticky header, sticky filters, and sticky purchase bar. Keep only the persistent control that benefits the current task and reserve its occupied space.
- Use safe-area-aware padding for bottom actions. Overlays must fit the available dynamic viewport, allow their content to scroll, and keep focused fields and actions reachable when the keyboard opens.
- Keep secondary actions visible or in a labeled menu. Do not use swipe-only removal, drag-only dismissal, or hidden long-press interactions.

### Progressive expansion

| Layout | Base experience | Enhancement when space permits |
| --- | --- | --- |
| Header | Wordmark, menu, search, bag | Expose collection links and preferences without crowding |
| Collection | Search, filter/sort controls, responsive grid | Add a sidebar only if useful filters and comfortable card widths fit |
| Product detail | Image followed by purchase information and notes | Place image and purchase information side by side |
| Bag | Stacked line items, totals after items | Add a summary column while preserving reading order |
| Filters | Modal sheet with explicit apply/cancel | Sidebar may apply immediately; annotate this difference |

Use 390×844 as the primary frame and verify 320px, 360px, 768px, and 1440px widths. Include a short mobile viewport, landscape orientation, increased text size, and browser zoom. These are review conditions, not fixed page dimensions. Desktop compositions must remain recognizably derived from the mobile reference.

## 7. Information Architecture and Screens

All routes below except the locale home are proposals for implementation, not existing pages.

### Shared storefront shell

Use a compact header containing the wordmark/home link, collection navigation, search, language control, theme preference, and bag entry. Avoid an account icon until an account experience exists. On mobile, prioritize the wordmark, menu, search, and bag; move secondary preferences into the menu.

Design the mobile header first with a minimum 3.5rem height that can grow with content. Open navigation from the logical start edge and provide a visible close button. Search opens a labeled search view with a field, submit action, and clear/cancel controls; do not automatically summon the software keyboard when opening navigation. Avoid a permanent bottom tab bar for the current small information architecture.

Provide a skip link and a clear main region. The footer can repeat collection navigation and language/theme controls. Include contact and policy links only when real destinations and approved content exist. Do not fabricate a newsletter or social presence.

### Home — `/{locale}`

1. A concise editorial introduction with one page title, short supporting copy, a primary “Explore fragrances” action, and a product-led visual.
2. A compact curated product section using the two available products. Label it “Explore the collection,” not “Bestsellers” or “New arrivals.”
3. Optional discovery links for populated houses or seasons. With the current data, avoid large mostly empty category grids.
4. A restrained footer. Omit trust claims and promotional strips until supported.

Suggested copy direction: “Find your next signature scent.” / “اكتشف عطرك القادم.” Treat all new Arabic marketing copy as draft content requiring native-language review.

### Collection and search — `/{locale}/fragrances`

Include a page title, result count, search input, filter controls, sort control, applied-filter chips, and product grid. Search and filters should share one results layout rather than becoming unrelated experiences.

- Search localized product and house names. Preserve the query and filters in shareable URL parameters during implementation.
- Supported filters: house, concentration, audience, season, and price. Offer only useful options for populated inventory.
- Use OR within one filter group and AND across groups. Search further narrows that result set.
- Define collection price filtering and price sorting by each product's lowest-priced variant. Label these as “Starting price” where ambiguity matters.
- Start with lowest/highest starting price and localized name sorting. Do not offer rating, popularity, or newest sorting without reliable data.
- A note-family filter is a future derived feature: family currently belongs to notes, not directly to products. It requires explicit derivation rules.
- Desktop filters may sit in a quiet sidebar. Mobile filters open an accessible sheet with selected counts, reset, and an “Apply filters” action; cancel restores the previously applied state.
- On mobile, place search above a compact filter/sort row. Applied chips wrap instead of pushing essential controls outside the viewport. A filter sheet has a visible title and close control, a scrollable body, and a reachable action area; dragging is optional. Opening a select or the keyboard must not hide Apply or prevent dismissal.
- Announce result-count changes accessibly without moving focus unexpectedly.
- Empty results show the query/filter context and clear reset actions. Do not strand the shopper on an empty grid.

### Product detail — `/{locale}/fragrances/{productId}`

Show breadcrumbs, the product image, localized house and name, concentration, audience, season, selected size, exact selected price, VAT note, size options, and the add-to-bag action. Put price and size selection together so their relationship is obvious.

- Use an explicit radio group for sizes. Initially select the lowest-priced variant to match a card's “From” price; selecting another size immediately updates the displayed price.
- Display top, heart, and base notes as three readable groups. The sample data supports lists, not intensity meters or longevity scores.
- Omit unsupported descriptions, release-year storytelling, stock claims, and shipping/returns promises. The current years and fragrance notes should be treated as seed data pending editorial verification.
- Missing imagery gets a neutral, labeled placeholder. A broken image must not collapse the page layout.
- Add-to-bag feedback names the product and selected size, confirms quantity, and offers “View bag” and “Continue shopping.” Announce success without forcing an unexpected navigation.
- Use explicit pending, success, and retryable failure states. Stock-dependent disabled states belong in the component specification, but require inventory data before being used as real claims.
- If a mobile sticky purchase bar is justified, show it only after the inline purchase action leaves view. Repeat the selected size and price accurately, keep both locations synchronized, and hide the bar while a modal is open. Do not add a second independent variant selection or create conflicting pending states.

### Shopping bag — proposed `/{locale}/bag`

Design a canonical bag page and a compact post-add confirmation. Each line shows product, house, selected size, unit price, quantity controls, line total, and remove action. Identify a line by product and variant so two sizes remain distinct.

Show a clear subtotal, the fact that listed prices include VAT, and an explanation that shipping charges require confirmed checkout rules. Do not add VAT a second time. Quantity controls require meaningful labels, a minimum of one, and explicit removal. On mobile, keep totals in normal reading order.

Include empty, populated, updating, update-failed, and item-unavailable variants. Preserve the shopper's choices after recoverable errors. Annotate persistence and inventory checks as implementation dependencies.

In the mobile design, use compact image thumbnails beside wrapping product details and place quantity/remove controls on a separate accessible row when needed. Keep the subtotal after the items. Prevent duplicate submissions during pending updates, preserve the last confirmed values on failure, and keep retry feedback adjacent to the affected line.

If showing a checkout action in the prototype, mark it as future scope and provide a clearly labeled prototype destination. Do not simulate a successful real order or imply working payment processing.

## 8. Real Content for the Designs

Use these repository examples. Amounts below explain the data; the rendered UI should use `formatPrice` rather than manually composing currency strings.

| Product | House | Concentration | Season | Variants, VAT included |
| --- | --- | --- | --- | --- |
| Alexandria II / أليكساندريا 2 | Xerjoff / زيرجوف | parfum | Winter / شتاء | 50 ml: SAR 1,000; 100 ml: SAR 2,000 |
| Layton / ليتون | Parfums De Marly / بارفام دي مارلي | edp | Spring / ربيع | 50 ml: SAR 750; 100 ml: SAR 1,500 |

Both products currently list men as the audience and lemon, jasmine, and vanilla as top, heart, and base notes. Do not claim these seed records are verified manufacturer descriptions.

Card price means the lowest variant price and carries a localized “From” label when multiple prices exist. Detail and bag prices refer to the selected variant. Store and calculate prices as integer halalas; format them only for display.

For unavailable photography, show visibly marked placeholders or licensed, correctly attributed product assets. Do not use AI-generated bottles as authentic product photography. Any conceptual imagery must be labeled as such in the handoff. Specify asset aspect ratio, subject placement, intended background, alt-text treatment, and usage rights.

## 9. Component and State Specification

Build a small component library in mobile dark mode first and reuse it across all screens. Each component needs size/spacing rules, semantic color mapping, content limits, theme behavior, RTL behavior, and interaction annotations. Resolve default, selected, pressed, pending, and keyboard-focus states before adding desktop hover styling. Show the same component in light mode through semantic remapping, without forking its structure.

| Component | Required variants and states |
| --- | --- |
| Button / icon button | Primary gold, secondary neutral, text action; default, hover, pressed, focus-visible, disabled, pending |
| Link | Default, hover, focus-visible, current navigation item |
| Text/search field | Label, optional helper, entered value, focus, error, disabled, clear/search action |
| Filter control | Unselected, selected, focused, unavailable; group labels and counts |
| Applied-filter chip | Label, accessible remove control, focus |
| Product card | Image/placeholder, localized house/name, starting price, hover/focus |
| Size selector | Unselected, selected, focused; unavailable only with supporting inventory |
| Quantity control | Increment, decrement, updating, failure, minimum state |
| Menu / dialog / sheet | Open, closed, initial focus, scroll behavior, dismissal, focus restoration |
| Status message | Informational, confirmation, error with recovery action |
| Bag item | Selected variant, quantity, totals, removal, update feedback |
| Loading / empty / not-found | Stable skeleton geometry, explanatory copy, useful recovery action |

Use a neutral secondary button with `border-line-strong` and `text-primary`. For selected controls, combine a readable label/checkmark with `bg-accent-subtle` and an accent line; gold alone is insufficient to communicate selection. Annotate any hover overlays so they remain within the palette and preserve text contrast. Avoid reducing the opacity of an entire control containing text.

Keep one main product link per card and avoid nested interactive targets. Use labeled radio controls for mutually exclusive sizes, buttons for actions, and links for navigation. Mobile interactions must not depend on hover.

## 10. Arabic and Bidirectional Behavior

- Produce real Arabic frames, not a flipped English screenshot. Use the existing localized catalog and season names.
- Mirror directional layout, breadcrumb order, panel entry edges, and directional arrows. Do not mirror logos, bottle photography, search icons, or other nondirectional symbols.
- Use logical alignment and spacing: start/end, `ms`/`me`, `ps`/`pe`, and `text-start`. Physical positioning needs an explicit functional reason.
- Preserve the equivalent product or collection context when switching languages, including query/filter state where meaningful. Unsupported destinations fall back to that locale's home with clear behavior.
- Keep Arabic text shaping intact. Allow wrapping and taller lines rather than reducing its font size to fit English dimensions.
- Isolate Latin names, model identifiers, sizes, and other mixed-direction runs using appropriate bidi markup during implementation. Keep formatted monetary values in a stable directional unit.
- Use the formatter's locale-aware currency output; do not manually reverse numbers or force a separate currency-symbol ordering.
- Label the language control with language names, not flags. Theme control exposes System, Light, and Dark in the active language.
- Check long house names, Arabic validation messages, price wrapping, and mixed-script names in every compact component.

## 11. Accessibility and Interaction Requirements

These are acceptance requirements to verify in the implemented interface, not a claim that the existing token palette has passed an accessibility audit.

- Measure text contrast on its actual background: target at least 4.5:1 for normal text and 3:1 for qualifying large text. Target 3:1 for essential control indicators and boundaries against adjacent colors.
- Pay particular attention to `text-muted` on `bg-surface`, gold focus indicators, and selected-state boundaries in both themes. Use an existing stronger semantic text token when needed.
- Focus must remain visible on page, surface, and action backgrounds. Use a separated focus ring and, where needed, a contrasting neutral outline from existing tokens. Specify and measure the actual combination.
- Use touch targets of at least 44×44 CSS pixels for interactive controls where practical, including icon and remove buttons; the visible icon may be smaller.
- Support keyboard access throughout. Dialogs trap focus, provide an accessible name and close control, close with Escape where appropriate, and restore focus to their trigger.
- Maintain one primary page heading and meaningful heading order. Give icon-only controls accessible names; hide decorative icons from assistive technology.
- Provide visible form labels and associate help/error text with its field. Do not convey errors or selections through color alone.
- At 320px and 200% zoom, preserve readable content and operable controls without unintended horizontal scrolling. Avoid sticky elements obscuring focused controls.
- Use concise live announcements for add-to-bag results and asynchronous updates. Do not announce every keystroke or steal focus after routine updates.
- Prefer subtle 120–200ms interaction transitions and restrained sheet motion. Respect reduced-motion preferences; avoid parallax, auto-rotating content, and required animation.
- Skeletons match final content geometry and should not rely on vigorous shimmer. Errors explain what happened and offer a concrete retry or return action.

## 12. Implementation Handoff Constraints

- The deliverable is a design and implementation specification. Do not imply that a visual prototype provides real commerce services.
- Map styles to existing Tailwind semantic utilities and matching type/leading pairs. Keep repeated geometry consistent through shared components and documented spacing choices.
- Preserve locale routing and the existing theme provider. Implement the proposed first-visit dark default while respecting saved choices and explicit System mode; verify initial paint and avoid theme-control hydration flashes.
- Express the mobile layout as the base styles and add larger-screen enhancements only where needed. Keep DOM reading order consistent with the mobile task sequence and avoid duplicate mobile/desktop forms with independent state.
- Reuse catalog IDs, localized values, and `formatPrice`; do not duplicate product data in presentation components.
- Keep interactive state local to the smallest useful component. Prefer server-rendered content for initial product information and introduce client behavior where interaction requires it.
- Reserve image dimensions to avoid layout shifts; optimize actual assets and prioritize only genuinely critical imagery. Avoid shipping a large animation library for simple transitions.
- Follow repository `AGENTS.md`. Before writing Next.js code, read the relevant installed documentation under `node_modules/next/dist/docs/`; do not assume familiar APIs apply to this version.
- Record missing prerequisites: font registration/coverage, approved product photography and copy, additional translations, cart persistence, inventory, and commerce integrations.

## 13. Required Claude Deliverables

1. A short creative rationale explaining the mobile dark experience, fragrance presentation, and bilingual hierarchy.
2. A dark-first foundations sheet with exact semantic variables, corresponding light mappings, typography roles in both scripts, spacing, grids, control dimensions, and image treatments.
3. Reusable mobile dark components covering the state matrix above, including touch, keyboard focus, and error recovery, with corresponding light variants.
4. Complete 390px dark-mode home, collection, product detail, and proposed bag screens in **both English and Arabic**. Present these first and use them as the reference for all adaptations.
5. Dark-mode desktop adaptations of all primary screens in both languages and a tablet collection/product-detail sample. Add light-mode mobile versions of all primary screens in both languages and light desktop collection/product-detail samples to verify theme and layout independently.
6. A connected prototype that opens in mobile dark mode and covers browse → filter/search → product → change size → add to bag → change quantity/remove, plus language/theme switching. Include open filters, the software-keyboard scenario, and recovery from an update failure. Mark missing backend behaviors explicitly.
7. Annotations for responsive changes, safe areas, overlay scrolling, RTL behavior, price semantics, overflow, focus order, loading, empty, error, and unavailable states. Include 320px and 360px stress-test frames for collection and purchase controls, documenting any one-column fallback.
8. An asset/content list and a concise handoff separating existing capabilities, proposed components/routes, and implementation dependencies.

If the design environment cannot produce editable frames or a connected prototype, deliver equivalent screen specifications and a navigable preview when available, and state the limitation plainly. Do not describe text-only proposals as completed visual designs.

## 14. Final Review Checklist

- [ ] Mobile dark screens in both languages establish the reference before desktop/light adaptations.
- [ ] First-visit dark behavior, saved preferences, explicit System mode, and locale changes follow the theme contract.
- [ ] Dark surfaces, product silhouettes, neutral text, gold actions, and focus indicators remain distinct and readable.
- [ ] All interface colors map to `globals.css`; no independent palette or unexplained token overrides.
- [ ] All text follows the existing five-role scale with matching leading and appropriate supplied font weights.
- [ ] Arabic shaping, mixed-direction content, taller leading, and logical layout work in real Arabic examples.
- [ ] Theme mappings work independently of language; contrast is measured rather than assumed.
- [ ] The two-product catalog looks intentional; no fabricated ratings, inventory, discounts, or policies appear.
- [ ] Starting price, selected size price, quantity totals, and VAT treatment are consistent.
- [ ] Navigation, filters, variants, and bag actions have complete usable states and recovery paths.
- [ ] Mobile controls are reachable and readable; desktop layouts use space without stretching sparse content.
- [ ] 320px/360px layouts, longer Arabic labels, software keyboards, short viewports, and safe areas preserve access to all actions.
- [ ] Sticky elements and sheets do not overlap each other, obscure feedback, or trap content outside the available viewport.
- [ ] Light mode preserves the complete mobile journey and has independently checked contrast and imagery.
- [ ] Keyboard focus, dialog behavior, labels, contrast, zoom/reflow, and reduced motion are specified and verified where a prototype permits.
- [ ] Images have an acquisition plan, consistent presentation, reserved dimensions, and appropriate alternative-text guidance.
- [ ] Repeated elements use shared components, and the handoff maps them to source tokens and data.
- [ ] Proposed commerce features and unresolved content/font dependencies are explicitly identified.

The design is ready for implementation when these deliverables and checks are satisfied, with any remaining gaps recorded as concrete follow-up work.
