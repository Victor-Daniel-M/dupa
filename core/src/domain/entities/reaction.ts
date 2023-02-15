import { CString } from '../value-objects/string';

enum ReactionType {
  LIKE,
  DISLIKE,
  FAVOURITE,
  COMMENT,
  RATING,
}

export class Reaction {
  id: CString;
  fromEntityId: CString;
  fromEntityName: CString;
  toEntityId: CString;
  toEntityName: CString;
  text: CString;
  createdAt: CString;
  updatedAt: CString;
  reactionType: ReactionType;
}
