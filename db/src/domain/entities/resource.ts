import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Resource')
export class Resource extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  desc: string;
}
