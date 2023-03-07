import { Global, Module } from '@nestjs/common';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { HealthController } from './adapter/controllers/health.controller';
import { OwnerPropertyController } from './adapter/controllers/owner/ownerProperty.controller';
import { PropertiesRepositoryImpl } from './infrastructure/repositories/propertiesRepository';
import { PrismaService } from './infrastructure/services/prisma.service';

@Global()
@Module({
  providers: [ResponseInterceptor, PropertiesRepositoryImpl, PrismaService],
  controllers: [HealthController, OwnerPropertyController],
})
export class CoreModule {}
