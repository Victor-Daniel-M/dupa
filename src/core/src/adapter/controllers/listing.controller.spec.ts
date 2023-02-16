import { createMock } from '@golevelup/ts-jest';
// import { AuthController } from './login.controller';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { EmailService } from '../../infrastructure/services/emailService';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User } from '@core/domain/entities/user';

describe('ListingController', () => {
  // let authController: AuthController;
  let emailService: EmailService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      // controllers: [AuthController],
      providers: [
        EmailService,
        {
          provide: EmailService,
          useValue: createMock<EmailService>(new EmailService()),
        },
        RepositoryImpl,
        {
          provide: RepositoryImpl,
          useValue: createMock<RepositoryImpl<User>>(
            new RepositoryImpl('listing'),
          ),
        },
        NotificationService,
        {
          provide: NotificationService,
          useValue: createMock<NotificationService>(new NotificationService()),
        },
      ],
    }).compile();

    // authController = moduleRef.get(AuthController);
    emailService = moduleRef.get(EmailService);
  });

  describe('recording a listing', () => {
    it.todo('broker should be able to create a listing');

    it.todo('non broker should not be able to create a listing');

    it.todo(
      'user should not be able to create a listing with incorrect information',
    );
  });
});
