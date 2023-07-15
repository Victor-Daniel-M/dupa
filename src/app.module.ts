import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from '../ormconfig';
import { TestEntityModule } from './test_entity/testEntity.module';
import { RealEstateModule } from 'real-estate/src/real-estate.module';
import { PingModule } from './ping/ping.module';
import { S3Provider } from 'real-estate/src/infrastructure/services/s3Provider.service';
import { DbModule } from 'db/src/db.module';
import { CONSTANTS } from '@common/constants';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    // UsersModule,
    TestEntityModule,
    TypeOrmModule.forRoot(OrmConfig),
    RealEstateModule,
    DbModule,
    PingModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, S3Provider],
})
export class AppModule {
  constructor(private readonly s3Provider: S3Provider) {}

  onModuleInit() {
    // // TODO: Create singleton for this that will use existing or create new one

    console.log('onModuleInit:CONSTANTS:', CONSTANTS);

    if (CONSTANTS.NODE_ENV == 'development') {
      try {
        // this.s3Provider.init();
        this.s3Provider.createBucket();
        console.log('S3 provider initialized');
      } catch (error) {}
    }
  }
}
