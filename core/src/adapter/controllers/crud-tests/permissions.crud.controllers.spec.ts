import { PermissionRepositoryImpl } from '@core/infrastructure/repositories/permissions-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { PermissionsCrudController } from '../crud-controllers/permissions.crud.controllers';

describe('permissions Controller', () => {
  let permissionsCrudController: PermissionsCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PermissionsCrudController],
      providers: [
        PermissionRepositoryImpl,
        {
          provide: PermissionRepositoryImpl,
          useValue: createMock<PermissionRepositoryImpl>(
            new PermissionRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    permissionsCrudController = moduleRef.get(PermissionsCrudController);
  });

  describe('CRUD Permissions', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await permissionsCrudController.create({
        id: '1',
        entityId: 'string',
        entityName: 'string',
        resourceActionId: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await permissionsCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await permissionsCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await permissionsCrudController.update({
        id: '1',
        entityId: 'string2',
        entityName: 'string2',
        resourceActionId: 'string2',
      });
      const findUpdatedRes = await permissionsCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ entityId: 'string2' });

      // ACT - DELETE
      await permissionsCrudController.delete({
        id: '1',
      });
      await expect(
        permissionsCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
