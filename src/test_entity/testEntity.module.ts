import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntityController } from './testEntity.controller';
import { TestEntityService } from './testEntity.service.orm';
import { TestEntity } from './domain/testEntity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])],
  controllers: [TestEntityController],
  providers: [TestEntityService],
})
export class TestEntityModule {}
