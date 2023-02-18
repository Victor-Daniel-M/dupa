import { createMock } from '@golevelup/ts-jest';
import { LoginController } from './login.controller';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { EmailService } from '../../infrastructure/services/emailService';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User } from '../../domain/entities/user';
import { CString } from '../../domain/value-objects/string';
import { Password } from '../../domain/value-objects/password';

describe('AuthController', () => {
  let authController: LoginController;
  let emailService: EmailService;
  let userRepositoryImpl: RepositoryImpl<User>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        EmailService,
        {
          provide: EmailService,
          useValue: createMock<EmailService>(new EmailService()),
        },
        RepositoryImpl,
        {
          provide: RepositoryImpl,
          useValue: createMock<RepositoryImpl<User>>(new RepositoryImpl()),
        },
        NotificationService,
        {
          provide: NotificationService,
          useValue: createMock<NotificationService>(new NotificationService()),
        },
      ],
    }).compile();

    authController = moduleRef.get(LoginController);
    userRepositoryImpl = moduleRef.get(RepositoryImpl);
    emailService = moduleRef.get(EmailService);
  });

  describe('login', () => {
    it('should be able to login', async () => {
      // SETUP
      await userRepositoryImpl.createOrThrow(
        {
          firstName: new CString('Test'),
          lastName: new CString('Test'),
          email: new CString('test@email.com'),
          createdAt: new CString('date'),
          updatedAt: new CString('date'),
          password: new Password('123456789'),
          phoneNumber: new CString('123456789'),
          id: new CString('1'),
        },
        'email',
      );
      const testData = {
        email: 'test@email.com',
        password: '123456789',
      };
      const expectedLoginRestaurant = {
        id: {
          value: '1',
        },
      };

      // ACT
      const res = await authController.loginBrokerViaSystem(testData);

      // ASSERT
      expect(res).toMatchObject(expectedLoginRestaurant);
      expect(emailService.sendLoginEmail).toBeCalledTimes(1);
    });
  });
});
