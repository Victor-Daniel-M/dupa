import { OfferMetaRepositoryImpl } from '@core/infrastructure/repositories/offer-metas-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { OfferMetasCrudController } from '../crud-controllers/offerMetas.crud.controllers';

describe('offerMetas Controller', () => {
  let offerMetasCrudController: OfferMetasCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [OfferMetasCrudController],
      providers: [
        OfferMetaRepositoryImpl,
        {
          provide: OfferMetaRepositoryImpl,
          useValue: createMock<OfferMetaRepositoryImpl>(
            new OfferMetaRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    offerMetasCrudController = moduleRef.get(OfferMetasCrudController);
  });

  describe('CRUD OfferMetas', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await offerMetasCrudController.create({
        id: '1',
        key: 'string',
        value: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        offerId: 'string',
        valueType: 'MetaValueTypes',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await offerMetasCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await offerMetasCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await offerMetasCrudController.update({
        id: '1',
        key: 'string2',
        value: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
        offerId: 'string2',
        valueType: 'MetaValueTypes2',
      });
      const findUpdatedRes = await offerMetasCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await offerMetasCrudController.delete({
        id: '1',
      });
      await expect(
        offerMetasCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
