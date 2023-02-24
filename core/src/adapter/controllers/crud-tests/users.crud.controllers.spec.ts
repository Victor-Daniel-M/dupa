import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { UsersCrudController } from '../crud-controllers/users.crud.controllers';

describe('users Controller', () => {
  let usersCrudController: UsersCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersCrudController],
      providers: [
        UserRepositoryImpl,
        {
          provide: UserRepositoryImpl,
          useValue: createMock<UserRepositoryImpl>(
            new UserRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    usersCrudController = moduleRef.get(UsersCrudController);
  });

  describe('CRUD Users', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await usersCrudController.create({
        id: '1',
        email: 'string',
  password: 'string',
  firstName: 'string',
  lastName: 'string',
  phoneNumber: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  userType: 'UserType'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await usersCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await usersCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await usersCrudController.update({
        id: '1',
        email: 'string2',
  password: 'string2',
  firstName: 'string2',
  lastName: 'string2',
  phoneNumber: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2',
  userType: 'UserType2'
      });
      const findUpdatedRes = await usersCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ email: 'string2' });

      // ACT - DELETE
      await usersCrudController.delete({
        id: '1',
      });
      await expect(
        usersCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
