import { TokenRepositoryImpl } from '@core/infrastructure/repositories/tokens-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { TokensCrudController } from '../crud-controllers/tokens.crud.controllers';

describe('tokens Controller', () => {
  let tokensCrudController: TokensCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TokensCrudController],
      providers: [
        TokenRepositoryImpl,
        {
          provide: TokenRepositoryImpl,
          useValue: createMock<TokenRepositoryImpl>(new TokenRepositoryImpl()),
        },
      ],
    }).compile();

    tokensCrudController = moduleRef.get(TokensCrudController);
  });

  describe('CRUD Tokens', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await tokensCrudController.create({
        id: '1',
        key: 'string',
        value: 'string',
        entityName: 'string',
        entityId: 'string',
        expiresAt: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await tokensCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await tokensCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await tokensCrudController.update({
        id: '1',
        key: 'string2',
        value: 'string2',
        entityName: 'string2',
        entityId: 'string2',
        expiresAt: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await tokensCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await tokensCrudController.delete({
        id: '1',
      });
      await expect(
        tokensCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
