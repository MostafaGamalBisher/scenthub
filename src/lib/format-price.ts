import type { Locale } from '@/i18n/config';

export function formatPrice(priceHalalas: number, locale: Locale): string {
  const formatter = new Intl.NumberFormat(`${locale}-SA`, {
    style: 'currency',
    currency: 'SAR',
  });

  const priceRiyals: number = priceHalalas / 100;

  const formattedPrice: string = formatter.format(priceRiyals);

  return formattedPrice;
}
