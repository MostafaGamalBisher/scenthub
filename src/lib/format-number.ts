import type { Locale } from '@/i18n/config';

export function formatNumber(
  value: number,
  locale: Locale,
  useGrouping: boolean = true
): string {
  const formatter = new Intl.NumberFormat(`${locale}-SA`, {
    style: 'decimal',
    useGrouping: useGrouping,
  });

  const formattedNumber: string = formatter.format(value);

  return formattedNumber;
}
