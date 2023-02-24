import { PropertyCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-categories-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { PropertyCategoriesCrudController } from '../crud-controllers/propertyCategories.crud.controllers';

describe('propertyCategories Controller', () => {
  let propertyCategoriesCrudController: PropertyCategoriesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PropertyCategoriesCrudController],
      providers: [
        PropertyCategoryRepositoryImpl,
        {
          provide: PropertyCategoryRepositoryImpl,
          useValue: createMock<PropertyCategoryRepositoryImpl>(
            new PropertyCategoryRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    propertyCategoriesCrudController = moduleRef.get(PropertyCategoriesCrudController);
  });

  describe('CRUD PropertyCategories', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await propertyCategoriesCrudController.create({
        id: '1',
        name: 'string',
  code: 'string',
  desc: 'string',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await propertyCategoriesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await propertyCategoriesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await propertyCategoriesCrudController.update({
        id: '1',
        name: 'string2',
  code: 'string2',
  desc: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await propertyCategoriesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ name: 'string2' });

      // ACT - DELETE
      await propertyCategoriesCrudController.delete({
        id: '1',
      });
      await expect(
        propertyCategoriesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
