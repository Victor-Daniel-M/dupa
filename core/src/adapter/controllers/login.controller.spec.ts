import { createMock } from '@golevelup/ts-jest';
import { LoginController } from './login.controller';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { EmailService } from '../../infrastructure/services/emailService';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/user-repository';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/property-repository';

describe('AuthController', () => {
  let authController: LoginController;
  let emailService: EmailService;
  let userRepositoryImpl: UserRepositoryImpl;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        EmailService,
        {
          provide: EmailService,
          useValue: createMock<EmailService>(new EmailService()),
        },
        PropertyRepositoryImpl,
        {
          provide: PropertyRepositoryImpl,
          useValue: createMock<PropertyRepositoryImpl>(
            new PropertyRepositoryImpl(),
          ),
        },
        UserRepositoryImpl,
        {
          provide: UserRepositoryImpl,
          useValue: createMock<UserRepositoryImpl>(new UserRepositoryImpl()),
        },
        NotificationService,
        {
          provide: NotificationService,
          useValue: createMock<NotificationService>(new NotificationService()),
        },
      ],
    }).compile();

    authController = moduleRef.get(LoginController);
    userRepositoryImpl = moduleRef.get(UserRepositoryImpl);
    emailService = moduleRef.get(EmailService);
  });

  describe('login', () => {
    it('should be able to login', async () => {
      // SETUP
      await userRepositoryImpl.createOrThrow(
        {
          firstName: 'Test',
          lastName: 'Test',
          email: 'test@email.com',
          createdAt: 'date',
          updatedAt: 'date',
          password: '123456789',
          phoneNumber: '123456789',
          id: '1',
        },
        'email',
      );

      const testData = {
        email: 'test@email.com',
        password: '123456789',
      };
      const expectedLoginRestaurant = {
        id: '1',
      };

      // ACT
      const res = await authController.loginBrokerViaSystem(testData);

      // ASSERT
      expect(res).toMatchObject(expectedLoginRestaurant);
      expect(emailService.sendLoginEmail).toBeCalledTimes(1);
    });
  });
});
