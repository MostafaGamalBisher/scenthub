'use client';

import type { HouseId } from '@/catalog/houses';

interface HouseFilterProps {
  houses: readonly { id: HouseId; name: string }[];
  optimisticHouses: readonly HouseId[];
  handleHouseIdChange: (houseId: HouseId, isChecked: boolean) => void;
}

export default function HouseFilter({
  optimisticHouses,
  handleHouseIdChange,
  houses,
}: HouseFilterProps) {
  return <></>;
}
