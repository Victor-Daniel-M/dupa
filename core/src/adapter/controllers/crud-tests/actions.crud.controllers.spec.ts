import { ActionRepositoryImpl } from '@core/infrastructure/repositories/actions-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { ActionsCrudController } from '../crud-controllers/actions.crud.controllers';

describe('actions Controller', () => {
  let actionsCrudController: ActionsCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ActionsCrudController],
      providers: [
        ActionRepositoryImpl,
        {
          provide: ActionRepositoryImpl,
          useValue: createMock<ActionRepositoryImpl>(
            new ActionRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    actionsCrudController = moduleRef.get(ActionsCrudController);
  });

  describe('CRUD Actions', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await actionsCrudController.create({
        id: '1',
        name: 'string',
  code: 'string',
  desc: 'string',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await actionsCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await actionsCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await actionsCrudController.update({
        id: '1',
        name: 'string2',
  code: 'string2',
  desc: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await actionsCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ name: 'string2' });

      // ACT - DELETE
      await actionsCrudController.delete({
        id: '1',
      });
      await expect(
        actionsCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
