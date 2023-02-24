import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribables-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { NotificationSubscribablesCrudController } from '../crud-controllers/notificationSubscribables.crud.controllers';

describe('notificationSubscribables Controller', () => {
  let notificationSubscribablesCrudController: NotificationSubscribablesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [NotificationSubscribablesCrudController],
      providers: [
        NotificationSubscribableRepositoryImpl,
        {
          provide: NotificationSubscribableRepositoryImpl,
          useValue: createMock<NotificationSubscribableRepositoryImpl>(
            new NotificationSubscribableRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    notificationSubscribablesCrudController = moduleRef.get(NotificationSubscribablesCrudController);
  });

  describe('CRUD NotificationSubscribables', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await notificationSubscribablesCrudController.create({
        id: '1',
        actionId: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  notificationStrategyId: 'string',
  notificationFrequencyId: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await notificationSubscribablesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await notificationSubscribablesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await notificationSubscribablesCrudController.update({
        id: '1',
        actionId: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2',
  notificationStrategyId: 'string2',
  notificationFrequencyId: 'string2'
      });
      const findUpdatedRes = await notificationSubscribablesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ actionId: 'string2' });

      // ACT - DELETE
      await notificationSubscribablesCrudController.delete({
        id: '1',
      });
      await expect(
        notificationSubscribablesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
