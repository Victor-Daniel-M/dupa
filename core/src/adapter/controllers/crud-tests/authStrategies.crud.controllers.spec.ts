import { AuthStrategyRepositoryImpl } from '@core/infrastructure/repositories/auth-strategies-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { AuthStrategiesCrudController } from '../crud-controllers/authStrategies.crud.controllers';

describe('authStrategies Controller', () => {
  let authStrategiesCrudController: AuthStrategiesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuthStrategiesCrudController],
      providers: [
        AuthStrategyRepositoryImpl,
        {
          provide: AuthStrategyRepositoryImpl,
          useValue: createMock<AuthStrategyRepositoryImpl>(
            new AuthStrategyRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    authStrategiesCrudController = moduleRef.get(AuthStrategiesCrudController);
  });

  describe('CRUD AuthStrategies', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await authStrategiesCrudController.create({
        id: '1',
        name: 'string',
        desc: 'string',
        code: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await authStrategiesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await authStrategiesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await authStrategiesCrudController.update({
        id: '1',
        name: 'string2',
        desc: 'string2',
        code: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await authStrategiesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ name: 'string2' });

      // ACT - DELETE
      await authStrategiesCrudController.delete({
        id: '1',
      });
      await expect(
        authStrategiesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
