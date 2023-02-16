import { AuthController } from './adapter/controllers/login.controller';
import { Global, Module } from '@nestjs/common';
import { EmailService } from './infrastructure/services/emailService';
import { NotificationService } from './infrastructure/services/notificationService';
import { UserRepositoryImpl } from './infrastructure/repositories/userRepository';
import { ResponseInterceptor } from 'common/controller-interceptors/src';

@Global()
@Module({
  providers: [
    EmailService,
    NotificationService,
    UserRepositoryImpl,
    ResponseInterceptor,
  ],
  controllers: [AuthController],
})
export class CoreModule {}
