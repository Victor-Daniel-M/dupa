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

  @Column()
  text: string;

  @Column()
  value: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
