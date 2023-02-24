import { SearchMetaRepositoryImpl } from '@core/infrastructure/repositories/search-metas-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { SearchMetasCrudController } from '../crud-controllers/searchMetas.crud.controllers';

describe('searchMetas Controller', () => {
  let searchMetasCrudController: SearchMetasCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SearchMetasCrudController],
      providers: [
        SearchMetaRepositoryImpl,
        {
          provide: SearchMetaRepositoryImpl,
          useValue: createMock<SearchMetaRepositoryImpl>(
            new SearchMetaRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    searchMetasCrudController = moduleRef.get(SearchMetasCrudController);
  });

  describe('CRUD SearchMetas', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await searchMetasCrudController.create({
        id: '1',
        key: 'string',
  value: 'string',
  valueType: 'MetaValueTypes',
  searchId: 'string',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await searchMetasCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await searchMetasCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await searchMetasCrudController.update({
        id: '1',
        key: 'string2',
  value: 'string2',
  valueType: 'MetaValueTypes2',
  searchId: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await searchMetasCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await searchMetasCrudController.delete({
        id: '1',
      });
      await expect(
        searchMetasCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
