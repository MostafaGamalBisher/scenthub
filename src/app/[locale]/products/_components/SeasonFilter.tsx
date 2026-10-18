'use client';

import { SEASONS, type Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';

interface SeasonFilterProps {
  locale: Locale;
  optimisticSeasons: readonly Season[];
  handleSeasonChange: (season: Season, isChecked: boolean) => void;
}

export default function SeasonFilter({
  locale,

  optimisticSeasons,
  handleSeasonChange,
}: SeasonFilterProps) {
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
    </div>
  );
}
