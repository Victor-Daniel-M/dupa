import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity('testEntity')
export class TestEntity extends BaseEntity {
  @Column({ length: 50 })
  @ApiPropertyOptional()
  readonly name: string;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
