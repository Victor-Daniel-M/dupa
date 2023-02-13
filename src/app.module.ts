import { AuthController } from '@authentication/adapter/controllers/authController';
import { Module } from '@nestjs/common';
import { AuthenticationModule } from '@authentication/authentication.module';
import { PinoLoggerService } from 'common/logger/src/adapters/real/pinoLogger.service';
import { LoggerModule } from 'common/logger/src/logger.module';
import { EmailService } from '@authentication/infrastructure/services/emailService';
import { NotificationService } from '@authentication/infrastructure/services/notificationService';
import { UserRepositoryImpl } from '@authentication/infrastructure/repositories/userRepository';
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
  imports: [AuthenticationModule, LoggerModule],
  controllers: [AuthController],
})
export class AppModule {
  constructor(private readonly logger: PinoLoggerService) {}

  // onModuleInit(): void {
  //   this.logger.setContext('AppModule');
  // }
}
