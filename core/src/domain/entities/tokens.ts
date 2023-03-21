import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Token')
export class Token extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  entityName: string;

  @Column()
  entityId: string;

  @Column()
  expiresAt: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
