import type { Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';

interface ProductSeasonsProps {
  productSeasonsArray: readonly Season[];
  locale: Locale;
}

function ProductSeasons({ locale, productSeasonsArray }: ProductSeasonsProps) {
  return (
    <ul>
      {productSeasonsArray.map((season) => (
        <li key={season}>{messages[locale].seasons[season]}</li>
      ))}
    </ul>
  );
}

export default ProductSeasons;
