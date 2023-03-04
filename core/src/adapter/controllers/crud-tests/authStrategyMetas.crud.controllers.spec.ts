import { AuthStrategyMetaRepositoryImpl } from '@core/infrastructure/repositories/auth-strategy-metas-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { AuthStrategyMetasCrudController } from '../crud-controllers/authStrategyMetas.crud.controllers';

describe('authStrategyMetas Controller', () => {
  let authStrategyMetasCrudController: AuthStrategyMetasCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuthStrategyMetasCrudController],
      providers: [
        AuthStrategyMetaRepositoryImpl,
        {
          provide: AuthStrategyMetaRepositoryImpl,
          useValue: createMock<AuthStrategyMetaRepositoryImpl>(
            new AuthStrategyMetaRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    authStrategyMetasCrudController = moduleRef.get(
      AuthStrategyMetasCrudController,
    );
  });

  describe('CRUD AuthStrategyMetas', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await authStrategyMetasCrudController.create({
        id: '1',
        key: 'string',
        value: 'string',
        valueType: 'MetaValueTypes',
        authStrategyId: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await authStrategyMetasCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await authStrategyMetasCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await authStrategyMetasCrudController.update({
        id: '1',
        key: 'string2',
        value: 'string2',
        valueType: 'MetaValueTypes2',
        authStrategyId: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await authStrategyMetasCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await authStrategyMetasCrudController.delete({
        id: '1',
      });
      await expect(
        authStrategyMetasCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
