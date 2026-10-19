'use client';

import type { HouseId } from '@/catalog/houses';
import type { Locale } from '@/i18n/config';

interface HouseFilterProps {
  locale: Locale;
  optimisticHouses: readonly HouseId[];
  handleHouseIdChange: (houseId: HouseId, isChecked: boolean) => void;
}

export default function HouseFilter({
  locale,
  optimisticHouses,
  handleHouseIdChange,
}: HouseFilterProps) {
  return <></>;
}
