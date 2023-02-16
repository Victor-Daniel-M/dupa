import { BaseRepository } from '@core/domain/repositories/base-repository';
import { RepositoryImpl } from '@core/infrastructure/repositories/base-repository';
import { ProjectDeps } from '../../config/projectDependencies';
import { User } from '../../domain/entities/user';
import { Email } from '../../domain/value-objects/email';
import { Password } from '../../domain/value-objects/password';
import { EmailService } from '../../infrastructure/services/emailService';

export class LoginBrokerViaSystemUsecase {
  private userRepository: RepositoryImpl<User>;
  private emailService: EmailService;

  constructor({
    userRepository,
    emailService,
  }: {
    userRepository: RepositoryImpl<User>;
    emailService: EmailService;
  }) {
    this.emailService = emailService;
    this.userRepository = userRepository;
  }

  async execute(email: string, password: string): Promise<User> {
    const emailValueObject = new Email(email);
    const passwordValueObject = new Password(password);

    const user = await this.userRepository.findOrThrow({
      email: emailValueObject,
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (!user.password.compare(passwordValueObject.value)) {
      throw new Error('Incorrect password');
    }

    this.emailService.sendLoginEmail(emailValueObject);

    return user;
  }
}
