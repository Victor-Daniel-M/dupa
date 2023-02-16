import { createMock } from '@golevelup/ts-jest';
import { AuthController } from './login.controller';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { EmailService } from '../../infrastructure/services/emailService';

describe('Register Controller', () => {
  let authController: AuthController;
  let emailService: EmailService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        EmailService,
        {
          provide: EmailService,
          useValue: createMock<EmailService>(new EmailService()),
        },
        NotificationService,
        {
          provide: NotificationService,
          useValue: createMock<NotificationService>(new NotificationService()),
        },
      ],
    }).compile();

    authController = moduleRef.get(AuthController);
    emailService = moduleRef.get(EmailService);
  });

  describe('register searcher via system', () => {
    it.todo('searcher should be able to register via system');

    it.todo(
      'searcher should not be able to register with incorrect information',
    );
  });

  describe('register broker via system', () => {
    it.todo('broker should be able to register via system');

    it.todo('broker should not be able to register with incorrect information');
  });
});
