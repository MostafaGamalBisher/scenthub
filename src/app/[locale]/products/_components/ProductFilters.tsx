'use client';

import type { HouseId } from '@/catalog/houses';
import type { Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';
import SeasonFilter from '@/app/[locale]/products/_components/SeasonFilter';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useOptimistic, useTransition } from 'react';

interface ProductFiltersProps {
  selectedSeasons: readonly Season[];
  selectedHouseIds: readonly HouseId[];
  locale: Locale;
}

interface FilterSelection {
  selectedHouseIds: readonly HouseId[];
  selectedSeasons: readonly Season[];
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

const updateFilterSelection = (
  currentSelection: FilterSelection,
  change: SeasonChange
): FilterSelection => {
  const newSeasonsSelection = updateSeasonSelection(
    currentSelection.selectedSeasons,
    change.season,
    change.isChecked
  );

  return {
    selectedHouseIds: currentSelection.selectedHouseIds,
    selectedSeasons: newSeasonsSelection,
  };
};

export default function ProductFilters({
  selectedSeasons,
  selectedHouseIds,
  locale,
}: ProductFiltersProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

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
      <SeasonFilter
        locale={locale}
        optimisticSeasons={optimisticSeasons}
        handleSeasonChange={handleSeasonChange}
      />
    </div>
  );
}
