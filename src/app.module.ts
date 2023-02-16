import { LoginController } from './core/src/adapter/controllers/login.controller';
import { Module } from '@nestjs/common';
import { CoreModule } from '../src/core/src/core.module';
import { PinoLoggerService } from 'common/logger/src/adapters/real/pinoLogger.service';
import { LoggerModule } from 'common/logger/src/logger.module';
import { EmailService } from '../src/core/src/infrastructure/services/emailService';
import { NotificationService } from '../src/core/src/infrastructure/services/notificationService';
import { ZodValidationPipe } from 'nestjs-zod';
import { APP_PIPE } from '@nestjs/core';
import { RegisterController } from '@core/adapter/controllers/register.controller';
import { RepositoryImpl } from '@core/infrastructure/repositories/base-repository';

@Module({
  providers: [
    EmailService,
    NotificationService,
    RepositoryImpl,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
  imports: [CoreModule, LoggerModule],
  controllers: [LoginController, RegisterController],
})
export class AppModule {
  constructor(private readonly logger: PinoLoggerService) {}

  // onModuleInit(): void {
  //   this.logger.setContext('AppModule');
  // }
}
