import { SearchRepositoryImpl } from '@core/infrastructure/repositories/searches-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { SearchesCrudController } from '../crud-controllers/searches.crud.controllers';

describe('searches Controller', () => {
  let searchesCrudController: SearchesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SearchesCrudController],
      providers: [
        SearchRepositoryImpl,
        {
          provide: SearchRepositoryImpl,
          useValue: createMock<SearchRepositoryImpl>(
            new SearchRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    searchesCrudController = moduleRef.get(SearchesCrudController);
  });

  describe('CRUD Searches', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await searchesCrudController.create({
        id: '1',
        userId: 'string',
  isSaved: 'Boolean',
  searchType: 'SearchType',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await searchesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await searchesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await searchesCrudController.update({
        id: '1',
        userId: 'string2',
  isSaved: 'Boolean2',
  searchType: 'SearchType2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await searchesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ userId: 'string2' });

      // ACT - DELETE
      await searchesCrudController.delete({
        id: '1',
      });
      await expect(
        searchesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
