import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from '../ormconfig';
import { TestEntityModule } from './test_entity/testEntity.module';

@Module({
  imports: [UsersModule, TestEntityModule, TypeOrmModule.forRoot(OrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
