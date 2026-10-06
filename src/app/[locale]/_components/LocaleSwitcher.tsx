'use client';

import type { Locale } from '@/i18n/config';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface LocaleSwitcherProps {
  locale: Locale;
}

export default function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const segments = pathName.split('/');

  const targetLocale: Locale = locale === 'en' ? 'ar' : 'en';

  segments[1] = targetLocale;

  const newPathname = segments.join('/');

  const queryString = searchParams.toString();

  const newURL = `${newPathname}${queryString !== '' ? '?' + queryString : ''}`;

  return (
    <Link lang={targetLocale} href={newURL}>
      {targetLocale === 'en' ? 'English' : 'العربية'}
    </Link>
  );
}
