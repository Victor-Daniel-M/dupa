import { BaseEntity } from '../../../../base/base.entity';
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

  @Column({ nullable: true })
  text: string;

  @Column({ nullable: true })
  mediaType: string;

  @Column({ nullable: true })
  mediaValue: string;

  @Column({ nullable: true })
  fromEntityId: number;

  @Column({ nullable: true })
  fromEntityName: string;

  @Column({ nullable: true })
  toEntityId: number;

  @Column({ nullable: true })
  toEntityName: string;
}
