enum ReactionType {
  LIKE,
  DISLIKE,
  FAVOURITE,
  COMMENT,
  RATING,
}

export class Reaction {
  id: string;
  fromEntityId: string;
  fromEntityName: string;
  toEntityId: string;
  toEntityName: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  reactionType: ReactionType;
}
