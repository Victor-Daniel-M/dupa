import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Permission')
export class Permission extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  entityId: string;

  @Column()
  entityName: string;

  @Column()
  resourceActionId: string;
}
