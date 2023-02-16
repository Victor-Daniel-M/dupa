import { createMock } from '@golevelup/ts-jest';
// import { AuthController } from './login.controller';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { EmailService } from '../../infrastructure/services/emailService';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { Property } from '../../domain/entities/property';
import { SearchController } from './search.controller';
import { CString } from '../../domain/value-objects/string';

describe('SearchController', () => {
  let searchController: SearchController;
  let propertyRepository: RepositoryImpl<Property>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [
        RepositoryImpl,
        {
          provide: RepositoryImpl,
          useValue: createMock<RepositoryImpl<Property>>(
            new RepositoryImpl('listing'),
          ),
        },
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

    searchController = moduleRef.get(SearchController);
    propertyRepository = moduleRef.get(RepositoryImpl);
  });

  describe('search a listing', () => {
    it('searcher should be able to search a listing with default filters', async () => {
      // SETUP
      await propertyRepository.createOrThrow(
        {
          createdAt: new CString('date'),
          updatedAt: new CString('daate'),
          id: new CString('1'),
          coverImage: new CString('test.png'),
          openDate: new CString('date'),
          propertyCategoryId: new CString('1'),
        },
        'id',
      );

      const expectedLoginRestaurant = {
        id: {
          value: '1',
        },
      };

      // ACT
      const res = await searchController.searchListing({
        openDate: 'date',
      });

      // ASSERT
      expect(res).toMatchObject([expectedLoginRestaurant]);
    });

    it.todo(
      'searcher should not be able to search a listing with incorrect filters',
    );

    it.todo('broker should not be able to search a listing');
  });
});
