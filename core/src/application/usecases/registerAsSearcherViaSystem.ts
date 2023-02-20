import { UserRepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User, UserType } from '../../domain/entities/user';
import { EmailService } from '../../infrastructure/services/emailService';

export class RegisterAsSearcherViaSystemUseCase {
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

  async execute({
    email,
    password,
    id,
    firstName,
    lastName,
    phoneNumber,
    createdAt,
    updatedAt,
    userType,
  }: {
    email: string;
    password: string;
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
    userType: UserType;
  }): Promise<User> {
    const idValueObj = id;
    const emailValueObj = email;
    const passwordValueObj = password;
    const firstNameValueObj = firstName;
    const lastNameValueObj = lastName;
    const phoneNumberValueObj = phoneNumber;
    const createdAtValueObj = createdAt;
    const updatedAtValueObj = updatedAt;
    const userTypeValueObj = userType;

    const user = await this.userRepository.createOrThrow(
      {
        email: emailValueObj,
        createdAt: createdAtValueObj,
        firstName: firstNameValueObj,
        id: idValueObj,
        lastName: lastNameValueObj,
        password: passwordValueObj,
        phoneNumber: phoneNumberValueObj,
        updatedAt: updatedAtValueObj,
        userType: userTypeValueObj,
      },
      'phoneNumber',
    );

    this.emailService.sendLoginEmail(emailValueObj);

    return user;
  }
}
