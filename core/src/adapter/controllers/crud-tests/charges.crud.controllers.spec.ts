import { ChargeRepositoryImpl } from '@core/infrastructure/repositories/charges-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { ChargesCrudController } from '../crud-controllers/charges.crud.controllers';

describe('charges Controller', () => {
  let chargesCrudController: ChargesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ChargesCrudController],
      providers: [
        ChargeRepositoryImpl,
        {
          provide: ChargeRepositoryImpl,
          useValue: createMock<ChargeRepositoryImpl>(
            new ChargeRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    chargesCrudController = moduleRef.get(ChargesCrudController);
  });

  describe('CRUD Charges', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await chargesCrudController.create({
        id: '1',
        value: 'string',
        lowerLimit: 'string',
        upperLimit: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        propertyId: 'string',
        chargeTypeId: 'string',
        valueType: 'MetaValueTypes',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await chargesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await chargesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await chargesCrudController.update({
        id: '1',
        value: 'string2',
        lowerLimit: 'string2',
        upperLimit: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
        propertyId: 'string2',
        chargeTypeId: 'string2',
        valueType: 'MetaValueTypes2',
      });
      const findUpdatedRes = await chargesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ value: 'string2' });

      // ACT - DELETE
      await chargesCrudController.delete({
        id: '1',
      });
      await expect(
        chargesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
