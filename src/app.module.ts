import { LoginController } from '../core/src/adapter/controllers/login.controller';
import { Module } from '@nestjs/common';
import { CoreModule } from '../core/src/core.module';
import { PinoLoggerService } from 'common/logger/src/adapters/real/pinoLogger.service';
import { LoggerModule } from 'common/logger/src/logger.module';
import { EmailService } from '../core/src/infrastructure/services/emailService';
import { NotificationService } from '../core/src/infrastructure/services/notificationService';
import {
  PropertyRepositoryImpl,
  UserRepositoryImpl,
} from 'core/src/infrastructure/repositories/base-repository';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  providers: [
    EmailService,
    PropertyRepositoryImpl,
    NotificationService,
    UserRepositoryImpl,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
  imports: [CoreModule, LoggerModule],
})
export class AppModule {}
