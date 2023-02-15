import { AuthController } from '@core/adapter/controllers/authController';
import { Module } from '@nestjs/common';
import { CoreModule } from '@core/core.module';
import { PinoLoggerService } from 'common/logger/src/adapters/real/pinoLogger.service';
import { LoggerModule } from 'common/logger/src/logger.module';
import { EmailService } from '@core/infrastructure/services/emailService';
import { NotificationService } from '@core/infrastructure/services/notificationService';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/userRepository';
import { ZodValidationPipe } from 'nestjs-zod';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    EmailService,
    NotificationService,
    UserRepositoryImpl,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
  imports: [CoreModule, LoggerModule],
  controllers: [AuthController],
})
export class AppModule {
  constructor(private readonly logger: PinoLoggerService) {}

  // onModuleInit(): void {
  //   this.logger.setContext('AppModule');
  // }
}
