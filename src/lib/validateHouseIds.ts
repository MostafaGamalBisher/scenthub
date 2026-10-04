import type { Result } from '@/lib/result';

export function validateHouseIds(
  houseIds: readonly string[]
): Result<readonly string[]> {
  if (houseIds.some((houseId) => houseId.trim() === '')) {
    return { ok: false, error: 'Value must not be empty.' };
  }

  return { ok: true, value: houseIds };
}
