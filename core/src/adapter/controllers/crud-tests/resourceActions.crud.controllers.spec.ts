import { ResourceActionRepositoryImpl } from '@core/infrastructure/repositories/resource-actions-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { ResourceActionsCrudController } from '../crud-controllers/resourceActions.crud.controllers';

describe('resourceActions Controller', () => {
  let resourceActionsCrudController: ResourceActionsCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ResourceActionsCrudController],
      providers: [
        ResourceActionRepositoryImpl,
        {
          provide: ResourceActionRepositoryImpl,
          useValue: createMock<ResourceActionRepositoryImpl>(
            new ResourceActionRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    resourceActionsCrudController = moduleRef.get(ResourceActionsCrudController);
  });

  describe('CRUD ResourceActions', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await resourceActionsCrudController.create({
        id: '1',
        createdAt: 'string',
  updatedAt: 'string',
  actionId: 'string',
  resourceId: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await resourceActionsCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await resourceActionsCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await resourceActionsCrudController.update({
        id: '1',
        createdAt: 'string2',
  updatedAt: 'string2',
  actionId: 'string2',
  resourceId: 'string2'
      });
      const findUpdatedRes = await resourceActionsCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ createdAt: 'string2' });

      // ACT - DELETE
      await resourceActionsCrudController.delete({
        id: '1',
      });
      await expect(
        resourceActionsCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
