import { ReactionRepositoryImpl } from '@core/infrastructure/repositories/reactions-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { ReactionsCrudController } from '../crud-controllers/reactions.crud.controllers';

describe('reactions Controller', () => {
  let reactionsCrudController: ReactionsCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ReactionsCrudController],
      providers: [
        ReactionRepositoryImpl,
        {
          provide: ReactionRepositoryImpl,
          useValue: createMock<ReactionRepositoryImpl>(
            new ReactionRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    reactionsCrudController = moduleRef.get(ReactionsCrudController);
  });

  describe('CRUD Reactions', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await reactionsCrudController.create({
        id: '1',
        fromEntityId: 'string',
  fromEntityName: 'string',
  toEntityId: 'string',
  toEntityName: 'string',
  text: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  reactionType: 'ReactionType'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await reactionsCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await reactionsCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await reactionsCrudController.update({
        id: '1',
        fromEntityId: 'string2',
  fromEntityName: 'string2',
  toEntityId: 'string2',
  toEntityName: 'string2',
  text: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2',
  reactionType: 'ReactionType2'
      });
      const findUpdatedRes = await reactionsCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ fromEntityId: 'string2' });

      // ACT - DELETE
      await reactionsCrudController.delete({
        id: '1',
      });
      await expect(
        reactionsCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
