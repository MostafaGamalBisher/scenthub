'use client';

import type { HouseId } from '@/catalog/houses';
import type { Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';
import SeasonFilter from '@/app/[locale]/products/_components/SeasonFilter';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useOptimistic, useTransition } from 'react';
import HouseFilter from '@/app/[locale]/products/_components/HouseFilter';

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
  type: 'season';
  season: Season;
  isChecked: boolean;
}

interface HouseChange {
  type: 'house';
  houseId: HouseId;
  isChecked: boolean;
}

type FilterChange = SeasonChange | HouseChange;

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

const updateHouseSelection = (
  currentHouseIds: readonly HouseId[],
  house: HouseId,
  isChecked: boolean
): readonly HouseId[] => {
  const isIncluded = currentHouseIds.includes(house);

  let newHouseIds;

  if (!isIncluded && isChecked) {
    newHouseIds = [...currentHouseIds, house];
  } else if (isIncluded && !isChecked) {
    newHouseIds = currentHouseIds.filter((slot) => slot !== house);
  } else {
    newHouseIds = currentHouseIds;
  }

  return newHouseIds;
};

const updateFilterSelection = (
  currentSelection: FilterSelection,
  change: FilterChange
): FilterSelection => {
  if (change.type === 'season') {
    const newSeasonsSelection = updateSeasonSelection(
      currentSelection.selectedSeasons,
      change.season,
      change.isChecked
    );

    return {
      selectedHouseIds: currentSelection.selectedHouseIds,
      selectedSeasons: newSeasonsSelection,
    };
  } else {
    const newHouseIdsSelection = updateHouseSelection(
      currentSelection.selectedHouseIds,
      change.houseId,
      change.isChecked
    );

    return {
      selectedHouseIds: newHouseIdsSelection,
      selectedSeasons: currentSelection.selectedSeasons,
    };
  }
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

  const confirmedSelection: FilterSelection = {
    selectedHouseIds,
    selectedSeasons,
  };

  const [optimisticSelection, updateOptimisticSelection] = useOptimistic(
    confirmedSelection,
    updateFilterSelection
  );

  const handleFilterChange = (change: FilterChange) => {
    const nextSelection = updateFilterSelection(optimisticSelection, change);

    const rawParams = new URLSearchParams(searchParams.toString());

    rawParams.delete('season');
    rawParams.delete('house');

    nextSelection.selectedSeasons.forEach((seasonParameter) =>
      rawParams.append('season', seasonParameter)
    );

    nextSelection.selectedHouseIds.forEach((houseParameter) =>
      rawParams.append('house', houseParameter)
    );

    rawParams.delete('page');

    const targetQueryParameters = rawParams.toString();

    const newURL = `${pathname}${targetQueryParameters === '' ? '' : '?' + targetQueryParameters}`;

    startTransition(() => {
      updateOptimisticSelection(change);
      router.push(newURL);
    });
  };

  return (
    <div>
      <SeasonFilter
        locale={locale}
        optimisticSeasons={optimisticSelection.selectedSeasons}
        handleSeasonChange={(season, isChecked) =>
          handleFilterChange({ type: 'season', season, isChecked })
        }
      />
      <HouseFilter
        locale={locale}
        optimisticHouses={optimisticSelection.selectedHouseIds}
        handleHouseIdChange={(houseId, isChecked) =>
          handleFilterChange({ type: 'house', houseId, isChecked })
        }
      />
    </div>
  );
}

const current: FilterSelection = {
  selectedHouseIds: ['xerjoff'],
  selectedSeasons: ['winter', 'spring'],
};

const result = updateFilterSelection(current, {
  type: 'house',
  houseId: 'xerjoff',
  isChecked: false,
});

console.log('Original:', current);
console.log('Result:', result);
