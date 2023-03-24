import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Permission')
export class Permission extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  entityId: string;

  @Column({ nullable: true })
  entityName: string;

  @Column({ nullable: true })
  resourceActionId: string;
}
