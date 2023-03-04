import { UserMetaRepositoryImpl } from '@core/infrastructure/repositories/user-metas-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { UserMetasCrudController } from '../crud-controllers/userMetas.crud.controllers';

describe('userMetas Controller', () => {
  let userMetasCrudController: UserMetasCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserMetasCrudController],
      providers: [
        UserMetaRepositoryImpl,
        {
          provide: UserMetaRepositoryImpl,
          useValue: createMock<UserMetaRepositoryImpl>(
            new UserMetaRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    userMetasCrudController = moduleRef.get(UserMetasCrudController);
  });

  describe('CRUD UserMetas', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await userMetasCrudController.create({
        id: '1',
        key: 'string',
        value: 'string',
        valueType: 'MetaValueTypes',
        userId: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await userMetasCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await userMetasCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await userMetasCrudController.update({
        id: '1',
        key: 'string2',
        value: 'string2',
        valueType: 'MetaValueTypes2',
        userId: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await userMetasCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await userMetasCrudController.delete({
        id: '1',
      });
      await expect(
        userMetasCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
