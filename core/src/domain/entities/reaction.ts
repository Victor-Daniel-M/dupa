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

  @Column({ nullable: true })
  fromEntityId: string;

  @Column({ nullable: true })
  fromEntityName: string;

  @Column({ nullable: true })
  toEntityId: string;

  @Column({ nullable: true })
  toEntityName: string;

  @Column({ nullable: true })
  text: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;

  @Column({ nullable: true })
  reactionType: ReactionType;
}
