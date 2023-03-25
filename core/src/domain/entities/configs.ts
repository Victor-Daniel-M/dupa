import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

export enum ConfigType {
  TERMS,
}

@Entity('Config')
export class Config extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  text: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}
