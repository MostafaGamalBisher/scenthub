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
  return (
    <div>
      {houses.map((house) => (
        <label key={house.id}>
          <input
            type="checkbox"
            checked={optimisticHouses.includes(house.id)}
            onChange={(event) =>
              handleHouseIdChange(house.id, event.currentTarget.checked)
            }
          />
          {house.name}
        </label>
      ))}
    </div>
  );
}
