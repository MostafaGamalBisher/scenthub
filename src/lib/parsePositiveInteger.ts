import type { Result } from '@/lib/result';

export function parsePositiveInteger(
  value: string | string[] | undefined
): Result<number | undefined> {
  if (value === undefined) {
    return { ok: true, value: undefined };
  }

  if (Array.isArray(value)) {
    return {
      ok: false,
      error: 'Expected a single value; repeated parameters are not allowed.',
    };
  }

  if (value.trim() === '') {
    return { ok: false, error: 'Value must not be empty.' };
  }

  const convertedValue = Number(value);

  if (convertedValue <= 0 || !Number.isInteger(convertedValue)) {
    return { ok: false, error: 'Value must be a positive integer.' };
  }

  return { ok: true, value: convertedValue };
}
