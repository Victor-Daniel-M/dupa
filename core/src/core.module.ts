import { LoginController } from './adapter/controllers/login.controller';
import { Global, Module } from '@nestjs/common';
import { EmailService } from './infrastructure/services/emailService';
import { NotificationService } from './infrastructure/services/notificationService';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { PropertyRepositoryImpl } from './infrastructure/repositories/property-repository';
import { UserRepositoryImpl } from './infrastructure/repositories/user-repository';

@Global()
@Module({
  providers: [
    EmailService,
    PropertyRepositoryImpl,
    UserRepositoryImpl,
    NotificationService,
    ResponseInterceptor,
  ],
  controllers: [LoginController],
})
export class CoreModule {}
