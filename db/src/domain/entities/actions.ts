import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Action')
export class Action extends BaseEntity {
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

@Entity('ResourceAction')
export class ResourceAction extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  actionId: string;

  @Column({ nullable: true })
  resourceId: string;
}
