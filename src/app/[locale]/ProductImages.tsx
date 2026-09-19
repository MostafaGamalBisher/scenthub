import type { ProductImage } from '@/catalog/products';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';
import Image from 'next/image';

interface ProductImagesProps {
  primaryImageId: string;
  images: readonly ProductImage[];
  locale: Locale;
}

function ProductImages({ primaryImageId, images, locale }: ProductImagesProps) {
  const primaryImage = images.find((image) => image.id === primaryImageId);

  if (primaryImage) {
    return (
      <Image
        src={primaryImage.src}
        alt={primaryImage.alt[locale]}
        width={600}
        height={400}
      />
    );
  } else if (primaryImage === undefined) {
    return (
      <Image
        src={`https://placehold.co/600x400?text=${messages[locale].noImage}`}
        alt={messages[locale].noImage}
      />
    );
  }
}
export default ProductImages;
