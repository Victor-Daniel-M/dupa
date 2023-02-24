import { NotificationSubscriberRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribers-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { NotificationSubscribersCrudController } from '../crud-controllers/notificationSubscribers.crud.controllers';

describe('notificationSubscribers Controller', () => {
  let notificationSubscribersCrudController: NotificationSubscribersCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [NotificationSubscribersCrudController],
      providers: [
        NotificationSubscriberRepositoryImpl,
        {
          provide: NotificationSubscriberRepositoryImpl,
          useValue: createMock<NotificationSubscriberRepositoryImpl>(
            new NotificationSubscriberRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    notificationSubscribersCrudController = moduleRef.get(NotificationSubscribersCrudController);
  });

  describe('CRUD NotificationSubscribers', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await notificationSubscribersCrudController.create({
        id: '1',
        entityId: 'string',
  entityName: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  notificationSubscribableId: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await notificationSubscribersCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await notificationSubscribersCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await notificationSubscribersCrudController.update({
        id: '1',
        entityId: 'string2',
  entityName: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2',
  notificationSubscribableId: 'string2'
      });
      const findUpdatedRes = await notificationSubscribersCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ entityId: 'string2' });

      // ACT - DELETE
      await notificationSubscribersCrudController.delete({
        id: '1',
      });
      await expect(
        notificationSubscribersCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
