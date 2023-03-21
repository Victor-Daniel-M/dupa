import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

enum ReactionType {
  LIKE,
  DISLIKE,
  FAVOURITE,
  COMMENT,
  RATING,
}

@Entity('Reaction')
export class Reaction extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  fromEntityId: string;

  @Column()
  fromEntityName: string;

  @Column()
  toEntityId: string;

  @Column()
  toEntityName: string;

  @Column()
  text: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  reactionType: ReactionType;
}
