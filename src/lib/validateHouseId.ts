import type { Result } from '@/lib/result';

export function validateHouseId(
  houseIds: readonly string[]
): Result<readonly string[] | undefined> {
  if (houseIds.some((houseId) => houseId.trim() === '')) {
    return { ok: false, error: 'Value must not be empty.' };
  }

  return { ok: true, value: houseIds };
}
