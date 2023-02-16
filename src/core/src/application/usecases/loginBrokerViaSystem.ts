import { ProjectDeps } from '../../config/projectDependencies';
import { User } from '../../domain/entities/user';
import { UserRepository } from '../../domain/repositories/userRepository';
import { Email } from '../../domain/value-objects/email';
import { Password } from '../../domain/value-objects/password';
import { EmailService } from '../../infrastructure/services/emailService';

export class LoginBrokerViaSystemUsecase {
  private userRepository: UserRepository;
  private emailService: EmailService;

  constructor({
    userRepository,
    emailService,
  }: {
    userRepository: UserRepository;
    emailService: EmailService;
  }) {
    this.emailService = emailService;
    this.userRepository = userRepository;
  }

  async execute(email: string, password: string): Promise<User> {
    const emailValueObject = new Email(email);
    const passwordValueObject = new Password(password);

    const user = await this.userRepository.findOneByEmail(emailValueObject);

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
