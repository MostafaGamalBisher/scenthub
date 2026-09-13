export function parsePositiveInteger(
  value: string | string[] | undefined
): number | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (Array.isArray(value)) {
    throw new Error('value is not valid "repeated values "');
  }

  if (value.trim() === '') {
    throw new Error('value is not valid "Empty Value"');
  }

  const convertedValue = Number(value);

  if (convertedValue <= 0 || !Number.isInteger(convertedValue)) {
    throw new Error('value is not valid');
  }

  return convertedValue;
}
