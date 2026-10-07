import { SEASONS, type Season } from '@/catalog/taxonomy';
import type { Locale } from '@/i18n/config';
import { messages } from '@/i18n/messages';

interface SeasonFilterProps {
  selectedSeasons: readonly Season[];
  locale: Locale;
}

export default function SeasonFilter({
  locale,
  selectedSeasons,
}: SeasonFilterProps) {
  return (
    <div>
      <p>{locale}</p>
      {selectedSeasons.map((season) => (
        <p key={season}>{season}</p>
      ))}
      {SEASONS.map((season) => (
        <p key={season}>{messages[locale].seasons[season]}</p>
      ))}
    </div>
  );
}
