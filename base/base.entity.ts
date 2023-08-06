import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterLoad,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiPropertyOptional()
  public id?: number;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;

  @AfterLoad()
  protected generateLabel(): void {
    // @ts-ignore
    this.label = `${this.firstName ?? this.title ?? this.name}`;
    // @ts-ignore
    this.value = this.id;
  }
}
