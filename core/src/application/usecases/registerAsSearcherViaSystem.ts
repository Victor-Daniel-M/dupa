import { BaseRepository } from 'core/src/domain/repositories/base-repository';
import { CString } from '../../domain/value-objects/string';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User, UserType } from '../../domain/entities/user';
import { Email } from '../../domain/value-objects/email';
import { Password } from '../../domain/value-objects/password';
import { EmailService } from '../../infrastructure/services/emailService';

export class RegisterAsSearcherViaSystemUseCase {
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
    const idValueObj = new CString(id);
    const emailValueObj = new Email(email);
    const passwordValueObj = new Password(password);
    const firstNameValueObj = new CString(firstName);
    const lastNameValueObj = new CString(lastName);
    const phoneNumberValueObj = new CString(phoneNumber);
    const createdAtValueObj = new CString(createdAt);
    const updatedAtValueObj = new CString(updatedAt);
    const userTypeValueObj = userType;

    const user = await this.userRepository.createOrThrow(
      {
        email: emailValueObj,
        createdAt: createdAtValueObj,
        firstName: firstNameValueObj,
        id: idValueObj,
        lastName: lastNameValueObj,
        password: new Password(await passwordValueObj.hash()),
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
