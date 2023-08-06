import { BaseEntity } from '../../../../base/base.entity';
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

  @Column({ nullable: true })
  entityId: string;

  @Column({ nullable: true })
  entityName: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  mediaType: MediaType;
}
