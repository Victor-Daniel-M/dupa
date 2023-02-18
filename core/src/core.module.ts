import { LoginController } from './adapter/controllers/login.controller';
import { Global, Module } from '@nestjs/common';
import { EmailService } from './infrastructure/services/emailService';
import { NotificationService } from './infrastructure/services/notificationService';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { RepositoryImpl } from './infrastructure/repositories/base-repository';
import { RegisterController } from './adapter/controllers/register.controller';

@Global()
@Module({
  providers: [
    EmailService,
    RepositoryImpl,
    NotificationService,
    ResponseInterceptor,
    // {
    //   useFactory(...args) {
    //     return new RepositoryImpl('users');
    //   },
    //   provide: RepositoryImpl,
    // },
    // {
    //   useFactory(...args) {
    //     return new RepositoryImpl('property');
    //   },
    //   provide: RepositoryImpl,
    // },
  ],
  controllers: [LoginController],
})
export class CoreModule {}
