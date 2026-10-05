import { isSeason, type Season } from '@/catalog/taxonomy';
import type { Result } from '@/lib/result';

export function validateSeasons(
  seasons: readonly string[]
): Result<readonly Season[]> {
  if (seasons.every((season) => isSeason(season)) === false) {
    return { ok: false, error: 'invalid seasons data' };
  }
  return { ok: true, value: seasons };
}
