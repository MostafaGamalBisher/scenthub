import type { Locale } from '@/i18n/config';
import ProductSeasons from '@/app/[locale]/ProductSeasons';
import ProductVariants from '@/app/[locale]/ProductVariants';
import { formatNumber } from '@/lib/format-number';
import type { CatalogProduct } from '@/catalog/products';
import { messages } from '@/i18n/messages';
import ProductImages from '@/app/[locale]/ProductImages';

interface ProductsListProps {
  locale: Locale;
  products: readonly CatalogProduct[];
}

function ProductsList({ locale, products }: ProductsListProps) {
  if (products.length === 0) {
    return <p>{messages[locale].noProducts}</p>;
  }

  return (
    <div>
      <p>products list</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductImages
              images={product.images}
              primaryImageId={product.primaryImageId}
              locale={locale}
            />

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
            <p>{product.house.name[locale]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsList;
