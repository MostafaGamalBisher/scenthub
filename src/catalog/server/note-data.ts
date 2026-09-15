import type { Note } from '@/catalog/notes';

export const NOTES = {
  bergamot: { name: { en: 'Bergamot', ar: 'برغموت' }, family: 'citrus' },
  lemon: { name: { en: 'Lemon', ar: 'ليمون' }, family: 'citrus' },
  jasmine: { name: { en: 'Jasmine', ar: 'ياسمين' }, family: 'floral' },
  vanilla: { name: { en: 'Vanilla', ar: 'فانيلا' }, family: 'gourmand' },
} as const satisfies Record<string, Note>;
