import { PlaceRepositoryImpl } from '@core/infrastructure/repositories/places-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { PlacesCrudController } from '../crud-controllers/places.crud.controllers';

describe('places Controller', () => {
  let placesCrudController: PlacesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PlacesCrudController],
      providers: [
        PlaceRepositoryImpl,
        {
          provide: PlaceRepositoryImpl,
          useValue: createMock<PlaceRepositoryImpl>(new PlaceRepositoryImpl()),
        },
      ],
    }).compile();

    placesCrudController = moduleRef.get(PlacesCrudController);
  });

  describe('CRUD Places', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await placesCrudController.create({
        id: '1',
        createdAt: 'string',
        updatedAt: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await placesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await placesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await placesCrudController.update({
        id: '1',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await placesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ createdAt: 'string2' });

      // ACT - DELETE
      await placesCrudController.delete({
        id: '1',
      });
      await expect(
        placesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
