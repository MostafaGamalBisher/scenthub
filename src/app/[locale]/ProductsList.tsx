import type { Locale } from '@/i18n/config';
import ProductSeasons from '@/app/[locale]/ProductSeasons';
import ProductVariants from '@/app/[locale]/ProductVariants';
import { formatNumber } from '@/lib/format-number';
import type { CatalogProduct } from '@/catalog/products';

interface ProductsListProps {
  locale: Locale;
  products: readonly CatalogProduct[];
}

function ProductsList({ locale, products }: ProductsListProps) {
  return (
    <div>
      <p>products list</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name[locale]}</h3>
            {product.year !== undefined ? (
              <span>{formatNumber(product.year, locale, false)}</span>
            ) : null}
            <ProductSeasons
              locale={locale}
              productSeasonsArray={product.season}
            />
            <ProductVariants
              locale={locale}
              productVariantsArray={product.variants}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsList;
