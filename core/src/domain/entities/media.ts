import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

enum MediaType {
  IMAGE,
  VIDEO,
  AUDIO,
}

@Entity('Media')
export class Media extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  entityId: string;

  @Column()
  entityName: string;

  @Column()
  value: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  mediaType: MediaType;
}
