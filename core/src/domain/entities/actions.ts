import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Action')
export class Action extends BaseEntity {
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

@Entity('ResourceAction')
export class ResourceAction extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  actionId: string;

  @Column()
  resourceId: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
