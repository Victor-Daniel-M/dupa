import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { PropertyRepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { SearchController } from './search.controller';

describe('SearchController', () => {
  let searchController: SearchController;
  let propertyRepository: PropertyRepositoryImpl;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [
        {
          provide: PropertyRepositoryImpl,
          useValue: createMock<PropertyRepositoryImpl>(
            new PropertyRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    searchController = moduleRef.get(SearchController);
    propertyRepository = moduleRef.get(PropertyRepositoryImpl);
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
