import { AuthController } from './adapter/controllers/authController';
import { Global, Module } from '@nestjs/common';
import { EmailService } from './infrastructure/services/emailService';
import { NotificationService } from './infrastructure/services/notificationService';
import { UserRepositoryImpl } from './infrastructure/repositories/userRepository';

@Global()
@Module({
  providers: [EmailService, NotificationService, UserRepositoryImpl],
  controllers: [AuthController],
})
export class CoreModule {}
