import { OfferRepositoryImpl } from '@core/infrastructure/repositories/offers-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { OffersCrudController } from '../crud-controllers/offers.crud.controllers';

describe('offers Controller', () => {
  let offersCrudController: OffersCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [OffersCrudController],
      providers: [
        OfferRepositoryImpl,
        {
          provide: OfferRepositoryImpl,
          useValue: createMock<OfferRepositoryImpl>(
            new OfferRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    offersCrudController = moduleRef.get(OffersCrudController);
  });

  describe('CRUD Offers', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await offersCrudController.create({
        id: '1',
        fromEntityId: 'string',
  fromEntityName: 'string',
  onEntityId: 'string',
  onEntityName: 'string',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await offersCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await offersCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await offersCrudController.update({
        id: '1',
        fromEntityId: 'string2',
  fromEntityName: 'string2',
  onEntityId: 'string2',
  onEntityName: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await offersCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ fromEntityId: 'string2' });

      // ACT - DELETE
      await offersCrudController.delete({
        id: '1',
      });
      await expect(
        offersCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
