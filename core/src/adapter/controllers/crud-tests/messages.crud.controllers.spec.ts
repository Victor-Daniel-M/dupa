import { MessageRepositoryImpl } from '@core/infrastructure/repositories/messages-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { MessagesCrudController } from '../crud-controllers/messages.crud.controllers';

describe('messages Controller', () => {
  let messagesCrudController: MessagesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MessagesCrudController],
      providers: [
        MessageRepositoryImpl,
        {
          provide: MessageRepositoryImpl,
          useValue: createMock<MessageRepositoryImpl>(
            new MessageRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    messagesCrudController = moduleRef.get(MessagesCrudController);
  });

  describe('CRUD Messages', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await messagesCrudController.create({
        id: '1',
        text: 'string',
  mediaType: 'string',
  mediaValue: 'string',
  fromEntityId: 'string',
  fromEntityName: 'string',
  toEntityId: 'string',
  toEntityName: 'string',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await messagesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await messagesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await messagesCrudController.update({
        id: '1',
        text: 'string2',
  mediaType: 'string2',
  mediaValue: 'string2',
  fromEntityId: 'string2',
  fromEntityName: 'string2',
  toEntityId: 'string2',
  toEntityName: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await messagesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ text: 'string2' });

      // ACT - DELETE
      await messagesCrudController.delete({
        id: '1',
      });
      await expect(
        messagesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
