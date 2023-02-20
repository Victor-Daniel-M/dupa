import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepositoryImpl } from 'core/src/infrastructure/repositories/base-repository';
import { User } from '../../domain/entities/user';
import { EmailService } from '../../infrastructure/services/emailService';

export class LoginBrokerViaSystemUsecase {
  private userRepository: UserRepositoryImpl;
  private emailService: EmailService;

  constructor({
    userRepository,
    emailService,
  }: {
    userRepository: UserRepositoryImpl;
    emailService: EmailService;
  }) {
    this.emailService = emailService;
    this.userRepository = userRepository;
  }

  async execute(email: string, password: string): Promise<User> {
    const emailValueObject = email;
    const passwordValueObject = password;

    const user = await this.userRepository.findOrThrow({
      email: emailValueObject,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password != passwordValueObject) {
      throw new UnauthorizedException('Incorrect password');
    }

    this.emailService.sendLoginEmail(emailValueObject);

    return user;
  }
}
