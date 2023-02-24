import { PropertyMetaCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-meta-categories-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { PropertyMetaCategoriesCrudController } from '../crud-controllers/propertyMetaCategories.crud.controllers';

describe('propertyMetaCategories Controller', () => {
  let propertyMetaCategoriesCrudController: PropertyMetaCategoriesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PropertyMetaCategoriesCrudController],
      providers: [
        PropertyMetaCategoryRepositoryImpl,
        {
          provide: PropertyMetaCategoryRepositoryImpl,
          useValue: createMock<PropertyMetaCategoryRepositoryImpl>(
            new PropertyMetaCategoryRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    propertyMetaCategoriesCrudController = moduleRef.get(PropertyMetaCategoriesCrudController);
  });

  describe('CRUD PropertyMetaCategories', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await propertyMetaCategoriesCrudController.create({
        id: '1',
        code: 'string',
  desc: 'string',
  valueType: 'MetaValueTypes',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await propertyMetaCategoriesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await propertyMetaCategoriesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await propertyMetaCategoriesCrudController.update({
        id: '1',
        code: 'string2',
  desc: 'string2',
  valueType: 'MetaValueTypes2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await propertyMetaCategoriesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ code: 'string2' });

      // ACT - DELETE
      await propertyMetaCategoriesCrudController.delete({
        id: '1',
      });
      await expect(
        propertyMetaCategoriesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
