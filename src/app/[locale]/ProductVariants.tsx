import type { Variant } from '@/catalog/products';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';
import { formatPrice } from '@/lib/format-price';

interface ProductVariantsProps {
  productVariantsArray: readonly Variant[];
  locale: Locale;
}

function ProductVariants({
  locale,
  productVariantsArray,
}: ProductVariantsProps) {
  return (
    <ul>
      {productVariantsArray.map((variant) => (
        <li key={variant.id}>
          <p>
            {variant.sizeMl} {messages[locale].units.ml}
          </p>
          <p>{formatPrice(variant.priceHalalas, locale)}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProductVariants;
