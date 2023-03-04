import { PropertyMetaRepositoryImpl } from '@core/infrastructure/repositories/property-metas-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { PropertyMetasCrudController } from '../crud-controllers/propertyMetas.crud.controllers';

describe('propertyMetas Controller', () => {
  let propertyMetasCrudController: PropertyMetasCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PropertyMetasCrudController],
      providers: [
        PropertyMetaRepositoryImpl,
        {
          provide: PropertyMetaRepositoryImpl,
          useValue: createMock<PropertyMetaRepositoryImpl>(
            new PropertyMetaRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    propertyMetasCrudController = moduleRef.get(PropertyMetasCrudController);
  });

  describe('CRUD PropertyMetas', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await propertyMetasCrudController.create({
        id: '1',
        key: 'string',
        value: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        propertyId: 'string',
        parentId: 'string',
        propertyMetaCategoryId: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await propertyMetasCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await propertyMetasCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await propertyMetasCrudController.update({
        id: '1',
        key: 'string2',
        value: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
        propertyId: 'string2',
        parentId: 'string2',
        propertyMetaCategoryId: 'string2',
      });
      const findUpdatedRes = await propertyMetasCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await propertyMetasCrudController.delete({
        id: '1',
      });
      await expect(
        propertyMetasCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
