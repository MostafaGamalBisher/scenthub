'use client';

import type { Locale } from '@/i18n/config';
import { usePathname, useSearchParams } from 'next/navigation';

interface LocaleSwitcherProps {
  locale: Locale;
}

export default function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const segments = pathName.split('/');

  const newPathname = segments.join('/');

  const queryString = searchParams.toString();

  segments[1] = locale;

  const newURL = `${newPathname}${queryString !== '' ? '?' + queryString : ''}`;

  console.log(newURL);

  return <p>{newURL}</p>;
}
