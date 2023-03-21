import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Resource')
export class Resource extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  desc: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
