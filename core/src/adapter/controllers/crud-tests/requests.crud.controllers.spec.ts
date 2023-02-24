import { RequestRepositoryImpl } from '@core/infrastructure/repositories/requests-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { RequestsCrudController } from '../crud-controllers/requests.crud.controllers';

describe('requests Controller', () => {
  let requestsCrudController: RequestsCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RequestsCrudController],
      providers: [
        RequestRepositoryImpl,
        {
          provide: RequestRepositoryImpl,
          useValue: createMock<RequestRepositoryImpl>(
            new RequestRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    requestsCrudController = moduleRef.get(RequestsCrudController);
  });

  describe('CRUD Requests', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await requestsCrudController.create({
        id: '1',
        fromEntityId: 'string',
  fromEntityName: 'string',
  onEntityId: 'string',
  onEntityName: 'string',
  message: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  status: 'RequestStatus',
  requestType: 'RequestType'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await requestsCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await requestsCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await requestsCrudController.update({
        id: '1',
        fromEntityId: 'string2',
  fromEntityName: 'string2',
  onEntityId: 'string2',
  onEntityName: 'string2',
  message: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2',
  status: 'RequestStatus2',
  requestType: 'RequestType2'
      });
      const findUpdatedRes = await requestsCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ fromEntityId: 'string2' });

      // ACT - DELETE
      await requestsCrudController.delete({
        id: '1',
      });
      await expect(
        requestsCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
