import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from '../ormconfig';
import { TestEntityModule } from './test_entity/testEntity.module';
import { CoreModule } from '@core/core.module';
import { PingModule } from './ping/ping.module';
import { S3Provider } from '@core/infrastructure/services/s3Provider.service';

@Module({
  imports: [
    // UsersModule,
    TestEntityModule,
    TypeOrmModule.forRoot(OrmConfig),
    CoreModule,
    PingModule,
  ],
  controllers: [AppController],
  providers: [AppService, S3Provider],
})
export class AppModule {
  constructor(private readonly s3Provider: S3Provider) {}

  onModuleInit() {
    // try {
    //   // this.s3Provider.init();
    //   this.s3Provider.createBucket();
    //   console.log('S3 provider initialized');
    // } catch (error) {}
  }
}
