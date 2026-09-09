import { PRODUCTS } from '@/catalog/products';
import type { Locale } from '@/i18n/config';
import ProductSeasons from '@/app/[locale]/ProductSeasons';
import ProductVariants from './ProductVariants';

interface ProductsListProps {
  locale: Locale;
}

const productsEntries = Object.entries(PRODUCTS);

function ProductsList({ locale }: ProductsListProps) {
  return (
    <div>
      <p>products list</p>
      <ul>
        {productsEntries.map(([productId, product]) => (
          <li key={productId}>
            <h3>{product.name[locale]}</h3>
            <span>{product.year}</span>
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
