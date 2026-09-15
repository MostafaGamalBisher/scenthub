import type { Localized } from '@/catalog/taxonomy';
import type { FamilyId } from '@/catalog/families';

export type Note = {
  name: Localized<string>;
  family: FamilyId;
};

export type NoteId = string;
