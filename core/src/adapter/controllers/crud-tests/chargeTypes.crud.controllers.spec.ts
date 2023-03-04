import { ChargeTypeRepositoryImpl } from '@core/infrastructure/repositories/charge-types-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { ChargeTypesCrudController } from '../crud-controllers/chargeTypes.crud.controllers';

describe('chargeTypes Controller', () => {
  let chargeTypesCrudController: ChargeTypesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ChargeTypesCrudController],
      providers: [
        ChargeTypeRepositoryImpl,
        {
          provide: ChargeTypeRepositoryImpl,
          useValue: createMock<ChargeTypeRepositoryImpl>(
            new ChargeTypeRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    chargeTypesCrudController = moduleRef.get(ChargeTypesCrudController);
  });

  describe('CRUD ChargeTypes', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await chargeTypesCrudController.create({
        id: '1',
        name: 'string',
        code: 'string',
        desc: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await chargeTypesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await chargeTypesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await chargeTypesCrudController.update({
        id: '1',
        name: 'string2',
        code: 'string2',
        desc: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await chargeTypesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ name: 'string2' });

      // ACT - DELETE
      await chargeTypesCrudController.delete({
        id: '1',
      });
      await expect(
        chargeTypesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
