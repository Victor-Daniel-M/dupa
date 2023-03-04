import { ResourceRepositoryImpl } from '@core/infrastructure/repositories/resources-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { ResourcesCrudController } from '../crud-controllers/resources.crud.controllers';

describe('resources Controller', () => {
  let resourcesCrudController: ResourcesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ResourcesCrudController],
      providers: [
        ResourceRepositoryImpl,
        {
          provide: ResourceRepositoryImpl,
          useValue: createMock<ResourceRepositoryImpl>(
            new ResourceRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    resourcesCrudController = moduleRef.get(ResourcesCrudController);
  });

  describe('CRUD Resources', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await resourcesCrudController.create({
        id: '1',
        name: 'string',
        code: 'string',
        desc: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await resourcesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await resourcesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await resourcesCrudController.update({
        id: '1',
        name: 'string2',
        code: 'string2',
        desc: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await resourcesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ name: 'string2' });

      // ACT - DELETE
      await resourcesCrudController.delete({
        id: '1',
      });
      await expect(
        resourcesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
