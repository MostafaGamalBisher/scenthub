import { PRODUCTS } from '@/catalog/products';
import type { Locale } from '@/i18n/config';

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
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsList;
