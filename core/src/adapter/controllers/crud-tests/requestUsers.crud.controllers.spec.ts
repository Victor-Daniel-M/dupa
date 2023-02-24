import { RequestUserRepositoryImpl } from '@core/infrastructure/repositories/request-users-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { RequestUsersCrudController } from '../crud-controllers/requestUsers.crud.controllers';

describe('requestUsers Controller', () => {
  let requestUsersCrudController: RequestUsersCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RequestUsersCrudController],
      providers: [
        RequestUserRepositoryImpl,
        {
          provide: RequestUserRepositoryImpl,
          useValue: createMock<RequestUserRepositoryImpl>(
            new RequestUserRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    requestUsersCrudController = moduleRef.get(RequestUsersCrudController);
  });

  describe('CRUD RequestUsers', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await requestUsersCrudController.create({
        id: '1',
        userId: 'string',
  requestId: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await requestUsersCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await requestUsersCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await requestUsersCrudController.update({
        id: '1',
        userId: 'string2',
  requestId: 'string2'
      });
      const findUpdatedRes = await requestUsersCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ userId: 'string2' });

      // ACT - DELETE
      await requestUsersCrudController.delete({
        id: '1',
      });
      await expect(
        requestUsersCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
