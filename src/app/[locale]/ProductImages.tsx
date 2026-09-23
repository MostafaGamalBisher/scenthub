'use client';

import type { ProductImage } from '@/catalog/products';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';
import Image from 'next/image';
import { useState } from 'react';

interface ProductImagesProps {
  imageId: string;
  images: readonly ProductImage[];
  locale: Locale;
}

function ProductImages({ imageId, images, locale }: ProductImagesProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const selectedImage = images.find((img) => img.id === imageId);

  const onErrorHandler = () => {
    if (selectedImage) {
      setFailedSrc(selectedImage.src);
    }
  };

  if (selectedImage && selectedImage.src !== failedSrc) {
    return (
      <Image
        src={selectedImage.src}
        alt={selectedImage.alt[locale]}
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
