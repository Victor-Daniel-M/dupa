import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User } from '../../domain/entities/user';
import { ListingController } from './listing.controller';

describe('ListingController', () => {
  let listingController: ListingController;
  let notificationService: NotificationService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ListingController],
      providers: [
        RepositoryImpl,
        {
          provide: RepositoryImpl,
          useValue: createMock<RepositoryImpl<User>>(new RepositoryImpl()),
        },
        NotificationService,
        {
          provide: NotificationService,
          useValue: createMock(new NotificationService()),
        },
      ],
    }).compile();

    listingController = moduleRef.get(ListingController);
    notificationService = moduleRef.get(NotificationService);
  });

  describe('recording a listing', () => {
    it('agent should be able to record a listing', async () => {
      const expectedRes = {
        id: '1',
      };

      // ACT
      const actualRes = await listingController.recordListing({
        createdAt: 'date',
        updatedAt: 'daate',
        id: '1',
        coverImage: 'test.png',
        openDate: 'date',
        propertyCategoryId: '1',
        cost: 1000_000_000,
        description: 'Some cool property',
        title: 'Test',
        propertyMeta: [
          {
            key: 'width',
            parentId: null,
            propertyMetaCategoryId: '1',
            value: '1000',
          },
        ],
      });

      // ASSERT
      expect(actualRes).toMatchObject(expectedRes);
      expect(notificationService.sendNotification).toBeCalledTimes(1);
    });

    it.todo('non broker should not be able to create a listing');

    it.todo(
      'user should not be able to create a listing with incorrect information',
    );
  });
});
