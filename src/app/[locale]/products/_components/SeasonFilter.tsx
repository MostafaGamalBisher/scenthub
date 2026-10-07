'use client';

import { SEASONS, type Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface SeasonFilterProps {
  selectedSeasons: readonly Season[];
  locale: Locale;
}

export default function SeasonFilter({
  locale,
  selectedSeasons,
}: SeasonFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSeasonChange = (season: Season, isChecked: boolean) => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (isChecked) {
      nextParams.append('season', season);
    } else {
      nextParams.delete('season', season);
    }
    nextParams.delete('page');

    const targetQueryParameters = nextParams.toString();

    const newURL = `${pathname}${targetQueryParameters === '' ? '' : '?' + targetQueryParameters}`;
    router.push(newURL);
  };

  return (
    <div>
      {SEASONS.map((season) => (
        <label key={season}>
          <input
            type="checkbox"
            checked={selectedSeasons.includes(season)}
            onChange={(event) =>
              handleSeasonChange(season, event.currentTarget.checked)
            }
          />
          {messages[locale].seasons[season]}
        </label>
      ))}
    </div>
  );
}
