'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const segments = pathName.split('/');

  const newPathname = segments.join('/');

  const queryString = searchParams.toString();

  segments[1] = 'en';

  const newURL = `${newPathname}${queryString !== '' ? '?' + queryString : ''}`;

  console.log(newURL);

  return <p>{newURL}</p>;
}
