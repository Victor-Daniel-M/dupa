import { createMock } from '@golevelup/ts-jest';
import { AuthController } from './login.controller';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { EmailService } from '../../infrastructure/services/emailService';

describe('SearchController', () => {
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

  describe('search a listing', () => {
    it.todo('searcher should be able to search a listing with default filters');

    it.todo(
      'searcher should not be able to search a listing with incorrect filters',
    );

    it.todo('broker should not be able to search a listing');
  });
});
