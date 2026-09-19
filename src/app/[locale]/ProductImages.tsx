'use client';

import type { ProductImage } from '@/catalog/products';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';
import Image from 'next/image';
import { useState } from 'react';

interface ProductImagesProps {
  primaryImageId: string;
  images: readonly ProductImage[];
  locale: Locale;
}

function ProductImages({ primaryImageId, images, locale }: ProductImagesProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const onErrorHandler = () => {
    setImageFailed(true);
  };

  const primaryImage = images.find((image) => image.id === primaryImageId);

  if (primaryImage && imageFailed === false) {
    return (
      <Image
        src={primaryImage.src}
        alt={primaryImage.alt[locale]}
        width={600}
        height={400}
        onError={onErrorHandler}
      />
    );
  } else {
    return <p>{messages[locale].noImage}</p>;
  }
}
export default ProductImages;
