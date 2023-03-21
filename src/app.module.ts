import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from '../ormconfig';
import { TestEntityModule } from './test_entity/testEntity.module';
import { CoreModule } from '@core/core.module';

@Module({
  imports: [
    // UsersModule,
    TestEntityModule,
    TypeOrmModule.forRoot(OrmConfig),
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
