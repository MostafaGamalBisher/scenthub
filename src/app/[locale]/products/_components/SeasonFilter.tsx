'use client';

import { SEASONS, type Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useOptimistic, useTransition } from 'react';

interface SeasonFilterProps {
  selectedSeasons: readonly Season[];
  locale: Locale;
}

interface SeasonChange {
  season: Season;
  isChecked: boolean;
}

const updateSeasonSelection = (
  currentSeasons: readonly Season[],
  season: Season,
  isChecked: boolean
): readonly Season[] => {
  const isIncluded = currentSeasons.includes(season);

  let newSeasonsArray;

  if (isIncluded && !isChecked) {
    newSeasonsArray = currentSeasons.filter((slot) => slot !== season);
  } else if (!isIncluded && isChecked) {
    newSeasonsArray = [...currentSeasons, season];
  } else {
    newSeasonsArray = currentSeasons;
  }

  return newSeasonsArray;
};

export default function SeasonFilter({
  locale,
  selectedSeasons,
}: SeasonFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [optimisticSeasons, updateOptimisticSeasons] = useOptimistic(
    selectedSeasons,
    (currentSeasons, change: SeasonChange) =>
      updateSeasonSelection(currentSeasons, change.season, change.isChecked)
  );

  const handleSeasonChange = (season: Season, isChecked: boolean) => {
    const nextSeasons = updateSeasonSelection(
      optimisticSeasons,
      season,
      isChecked
    );

    const rawParams = new URLSearchParams(searchParams.toString());

    rawParams.delete('season');

    nextSeasons.forEach((seasonParameter) =>
      rawParams.append('season', seasonParameter)
    );

    rawParams.delete('page');

    const targetQueryParameters = rawParams.toString();

    const newURL = `${pathname}${targetQueryParameters === '' ? '' : '?' + targetQueryParameters}`;

    startTransition(() => {
      updateOptimisticSeasons({ season, isChecked });
      router.push(newURL);
    });
  };

  return (
    <div>
      {SEASONS.map((season) => (
        <label key={season}>
          <input
            type="checkbox"
            checked={optimisticSeasons.includes(season)}
            onChange={(event) =>
              handleSeasonChange(season, event.currentTarget.checked)
            }
          />
          {messages[locale].seasons[season]}
        </label>
      ))}
      <p>{isPending ? 'Pending' : 'Idle'}</p>
    </div>
  );
}
