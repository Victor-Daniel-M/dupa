import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { EmailService } from '../../infrastructure/services/emailService';
import { RegisterController } from './register.controller';
import { UserRepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User } from 'core/src/domain/entities/user';

describe('Register Controller', () => {
  let registerController: RegisterController;
  let emailService: EmailService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RegisterController],
      providers: [
        EmailService,
        {
          provide: EmailService,
          useValue: createMock<EmailService>(new EmailService()),
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

    registerController = moduleRef.get(RegisterController);
    emailService = moduleRef.get(EmailService);
  });

  describe('register searcher via system', () => {
    it('searcher should be able to register via system', async () => {
      const expectedLoginRestaurant = {
        id: '1',
      };

      // ACT
      const res = await registerController.registerAsSearcherViaSystem({
        createdAt: 'date',
        updatedAt: 'daate',
        email: 'test@email.com',
        firstName: 'test',
        id: '1',
        lastName: 'test',
        password: '12343578',
        phoneNumber: '123456',
        userType: 'AGENT',
      });

      // ASSERT
      expect(res).toMatchObject(expectedLoginRestaurant);
      expect(emailService.sendLoginEmail).toBeCalledTimes(1);
    });

    it.todo(
      'searcher should not be able to register with incorrect information',
    );
  });

  describe('register broker via system', () => {
    it.todo('broker should be able to register via system');

    it.todo('broker should not be able to register with incorrect information');
  });
});
