import { RequestMetaRepositoryImpl } from '@core/infrastructure/repositories/request-metas-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { RequestMetasCrudController } from '../crud-controllers/requestMetas.crud.controllers';

describe('requestMetas Controller', () => {
  let requestMetasCrudController: RequestMetasCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RequestMetasCrudController],
      providers: [
        RequestMetaRepositoryImpl,
        {
          provide: RequestMetaRepositoryImpl,
          useValue: createMock<RequestMetaRepositoryImpl>(
            new RequestMetaRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    requestMetasCrudController = moduleRef.get(RequestMetasCrudController);
  });

  describe('CRUD RequestMetas', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await requestMetasCrudController.create({
        id: '1',
        key: 'string',
  value: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  requestId: 'string',
  valueType: 'MetaValueTypes'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await requestMetasCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await requestMetasCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await requestMetasCrudController.update({
        id: '1',
        key: 'string2',
  value: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2',
  requestId: 'string2',
  valueType: 'MetaValueTypes2'
      });
      const findUpdatedRes = await requestMetasCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await requestMetasCrudController.delete({
        id: '1',
      });
      await expect(
        requestMetasCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
