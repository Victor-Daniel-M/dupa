import { EntityAddressRepositoryImpl } from '@core/infrastructure/repositories/entity-addresses-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { EntityAddressesCrudController } from '../crud-controllers/entityAddresses.crud.controllers';

describe('entityAddresses Controller', () => {
  let entityAddressesCrudController: EntityAddressesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EntityAddressesCrudController],
      providers: [
        EntityAddressRepositoryImpl,
        {
          provide: EntityAddressRepositoryImpl,
          useValue: createMock<EntityAddressRepositoryImpl>(
            new EntityAddressRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    entityAddressesCrudController = moduleRef.get(
      EntityAddressesCrudController,
    );
  });

  describe('CRUD EntityAddresses', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await entityAddressesCrudController.create({
        id: '1',
        entityId: 'string',
        entityName: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        addressId: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await entityAddressesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await entityAddressesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await entityAddressesCrudController.update({
        id: '1',
        entityId: 'string2',
        entityName: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
        addressId: 'string2',
      });
      const findUpdatedRes = await entityAddressesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ entityId: 'string2' });

      // ACT - DELETE
      await entityAddressesCrudController.delete({
        id: '1',
      });
      await expect(
        entityAddressesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
