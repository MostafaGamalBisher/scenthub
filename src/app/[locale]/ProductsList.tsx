import type { Product } from '@/catalog/products';
import type { Locale } from '@/i18n/config';

interface ProductsListProps {
  locale: Locale;
  productsList: Product[];
}

function ProductsList({ locale, productsList }: ProductsListProps) {
  return <p>list</p>;
}
export default ProductsList;
