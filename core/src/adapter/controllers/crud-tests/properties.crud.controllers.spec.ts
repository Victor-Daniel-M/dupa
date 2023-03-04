import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { PropertiesCrudController } from '../crud-controllers/properties.crud.controllers';

describe('properties Controller', () => {
  let propertiesCrudController: PropertiesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PropertiesCrudController],
      providers: [
        PropertyRepositoryImpl,
        {
          provide: PropertyRepositoryImpl,
          useValue: createMock<PropertyRepositoryImpl>(
            new PropertyRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    propertiesCrudController = moduleRef.get(PropertiesCrudController);
  });

  describe('CRUD Properties', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await propertiesCrudController.create({
        id: '1',
        title: 'string',
        description: 'string',
        coverImage: 'string',
        cost: 1,
        createdAt: 'string',
        updatedAt: 'string',
        openDate: 'string',
        propertyCategoryId: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await propertiesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await propertiesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await propertiesCrudController.update({
        id: '1',
        title: 'string2',
        description: 'string2',
        coverImage: 'string2',
        cost: 1,
        createdAt: 'string2',
        updatedAt: 'string2',
        openDate: 'string2',
        propertyCategoryId: 'string2',
      });
      const findUpdatedRes = await propertiesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ title: 'string2' });

      // ACT - DELETE
      await propertiesCrudController.delete({
        id: '1',
      });
      await expect(
        propertiesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
