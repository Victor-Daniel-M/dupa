import { AddressRepositoryImpl } from '@core/infrastructure/repositories/addresses-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { AddressesCrudController } from '../crud-controllers/addresses.crud.controllers';

describe('addresses Controller', () => {
  let addressesCrudController: AddressesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AddressesCrudController],
      providers: [
        AddressRepositoryImpl,
        {
          provide: AddressRepositoryImpl,
          useValue: createMock<AddressRepositoryImpl>(
            new AddressRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    addressesCrudController = moduleRef.get(AddressesCrudController);
  });

  describe('CRUD Addresses', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await addressesCrudController.create({
        id: '1',
        city: 'string',
  street: 'string',
  district: 'string',
  region: 'string',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await addressesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await addressesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await addressesCrudController.update({
        id: '1',
        city: 'string2',
  street: 'string2',
  district: 'string2',
  region: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await addressesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ city: 'string2' });

      // ACT - DELETE
      await addressesCrudController.delete({
        id: '1',
      });
      await expect(
        addressesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
