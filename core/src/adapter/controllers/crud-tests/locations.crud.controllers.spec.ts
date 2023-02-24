import { LocationRepositoryImpl } from '@core/infrastructure/repositories/locations-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { LocationsCrudController } from '../crud-controllers/locations.crud.controllers';

describe('locations Controller', () => {
  let locationsCrudController: LocationsCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [LocationsCrudController],
      providers: [
        LocationRepositoryImpl,
        {
          provide: LocationRepositoryImpl,
          useValue: createMock<LocationRepositoryImpl>(
            new LocationRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    locationsCrudController = moduleRef.get(LocationsCrudController);
  });

  describe('CRUD Locations', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await locationsCrudController.create({
        id: '1',
        entityName: 'string',
  entityId: 'string',
  lat: 1,
  lng: 1,
  name: 'string',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await locationsCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await locationsCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await locationsCrudController.update({
        id: '1',
        entityName: 'string2',
  entityId: 'string2',
  lat: 1,
  lng: 1,
  name: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await locationsCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ entityName: 'string2' });

      // ACT - DELETE
      await locationsCrudController.delete({
        id: '1',
      });
      await expect(
        locationsCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
