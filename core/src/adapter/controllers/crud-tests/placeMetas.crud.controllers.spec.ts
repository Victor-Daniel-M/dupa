import { PlaceMetaRepositoryImpl } from '@core/infrastructure/repositories/place-metas-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { PlaceMetasCrudController } from '../crud-controllers/placeMetas.crud.controllers';

describe('placeMetas Controller', () => {
  let placeMetasCrudController: PlaceMetasCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PlaceMetasCrudController],
      providers: [
        PlaceMetaRepositoryImpl,
        {
          provide: PlaceMetaRepositoryImpl,
          useValue: createMock<PlaceMetaRepositoryImpl>(
            new PlaceMetaRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    placeMetasCrudController = moduleRef.get(PlaceMetasCrudController);
  });

  describe('CRUD PlaceMetas', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await placeMetasCrudController.create({
        id: '1',
        key: 'string',
  value: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  placeId: 'string',
  valueType: 'MetaValueTypes'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await placeMetasCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await placeMetasCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await placeMetasCrudController.update({
        id: '1',
        key: 'string2',
  value: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2',
  placeId: 'string2',
  valueType: 'MetaValueTypes2'
      });
      const findUpdatedRes = await placeMetasCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await placeMetasCrudController.delete({
        id: '1',
      });
      await expect(
        placeMetasCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
