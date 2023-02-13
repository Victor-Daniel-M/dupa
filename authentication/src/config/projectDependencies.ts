import { UserRepositoryImpl } from '../infrastructure/repositories/userRepository';
import { EmailService } from '../infrastructure/services/emailService';
import { NotificationService } from '../infrastructure/services/notificationService';

export const getProjectDeps = () => {
  return {
    UserRepository: new UserRepositoryImpl(),
    EmailService: new EmailService(),
    NotificationService: new NotificationService(),
  };
};

export type ProjectDeps = ReturnType<typeof getProjectDeps>;
