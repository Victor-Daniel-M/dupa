import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

export enum MessageType {
  TALK_TO_REDFIN,
  TALK_TO_AGENT,
}

@Entity('Message')
export class Message extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  text: string;

  @Column()
  mediaType: string;

  @Column()
  mediaValue: string;

  @Column()
  fromEntityId: string;

  @Column()
  fromEntityName: string;

  @Column()
  toEntityId: string;

  @Column()
  toEntityName: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
