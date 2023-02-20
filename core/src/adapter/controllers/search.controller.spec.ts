import { createMock } from '@golevelup/ts-jest';
// import { AuthController } from './login.controller';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { EmailService } from '../../infrastructure/services/emailService';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { Property } from '../../domain/entities/property';
import { SearchController } from './search.controller';

describe('SearchController', () => {
  let searchController: SearchController;
  let propertyRepository: RepositoryImpl<Property>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [
        {
          provide: RepositoryImpl,
          useValue: createMock<RepositoryImpl<Property>>(new RepositoryImpl()),
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
          createdAt: 'date',
          updatedAt: 'daate',
          id: '1',
          coverImage: 'test.png',
          openDate: 'date',
          propertyCategoryId: '1',
          cost: 1000_000_000,
          description: 'description',
          title: 'title',
        },
        'id',
      );

      const expectedLoginRestaurant = {
        id: '1',
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
