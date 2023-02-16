import { LoginController } from './adapter/controllers/login.controller';
import { Global, Module } from '@nestjs/common';
import { EmailService } from './infrastructure/services/emailService';
import { NotificationService } from './infrastructure/services/notificationService';
import { ResponseInterceptor } from 'common/controller-interceptors/src';
import { RepositoryImpl } from './infrastructure/repositories/base-repository';
import { RegisterController } from './adapter/controllers/register.controller';

@Global()
@Module({
  providers: [
    EmailService,
    NotificationService,
    ResponseInterceptor,
    {
      useFactory(...args) {
        return new RepositoryImpl('users');
      },
      provide: RepositoryImpl,
    },
  ],
  controllers: [LoginController, RegisterController],
})
export class CoreModule {}
