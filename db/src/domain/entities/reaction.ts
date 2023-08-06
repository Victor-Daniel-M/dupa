import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

export const ReactionTypes = [
  'LIKE',
  'DISLIKE',
  'FAVOURITE',
  'COMMENT',
  'RATING',
] as const;

export type ReactionType = (typeof ReactionTypes)[number];

@Entity('Reaction')
export class Reaction extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  fromEntityId: Number;

  @Column({ nullable: true })
  fromEntityName: string;

  @Column({ nullable: true })
  toEntityId: Number;

  @Column({ nullable: true })
  toEntityName: string;

  @Column({ nullable: true })
  text?: string;

  @Column({ nullable: true })
  reactionType: ReactionType;
}
