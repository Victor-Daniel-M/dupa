import { UserPropertyRepositoryImpl } from '@core/infrastructure/repositories/user-properties-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { UserPropertiesCrudController } from '../crud-controllers/userProperties.crud.controllers';

describe('userProperties Controller', () => {
  let userPropertiesCrudController: UserPropertiesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserPropertiesCrudController],
      providers: [
        UserPropertyRepositoryImpl,
        {
          provide: UserPropertyRepositoryImpl,
          useValue: createMock<UserPropertyRepositoryImpl>(
            new UserPropertyRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    userPropertiesCrudController = moduleRef.get(UserPropertiesCrudController);
  });

  describe('CRUD UserProperties', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await userPropertiesCrudController.create({
        id: '1',
        userPropertyType: 'UserPropertyType',
        propertyId: 'string',
        userId: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await userPropertiesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await userPropertiesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await userPropertiesCrudController.update({
        id: '1',
        userPropertyType: 'UserPropertyType2',
        propertyId: 'string2',
        userId: 'string2',
      });
      const findUpdatedRes = await userPropertiesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({
        userPropertyType: 'UserPropertyType2',
      });

      // ACT - DELETE
      await userPropertiesCrudController.delete({
        id: '1',
      });
      await expect(
        userPropertiesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
