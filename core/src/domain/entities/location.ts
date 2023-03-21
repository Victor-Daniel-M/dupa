import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Location')
export class Location extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  entityName: string;

  @Column()
  entityId: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  name: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
