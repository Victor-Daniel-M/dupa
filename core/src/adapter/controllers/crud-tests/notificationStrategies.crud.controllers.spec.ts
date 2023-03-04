import { NotificationStrategyRepositoryImpl } from '@core/infrastructure/repositories/notification-strategies-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { NotificationStrategiesCrudController } from '../crud-controllers/notificationStrategies.crud.controllers';

describe('notificationStrategies Controller', () => {
  let notificationStrategiesCrudController: NotificationStrategiesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [NotificationStrategiesCrudController],
      providers: [
        NotificationStrategyRepositoryImpl,
        {
          provide: NotificationStrategyRepositoryImpl,
          useValue: createMock<NotificationStrategyRepositoryImpl>(
            new NotificationStrategyRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    notificationStrategiesCrudController = moduleRef.get(
      NotificationStrategiesCrudController,
    );
  });

  describe('CRUD NotificationStrategies', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await notificationStrategiesCrudController.create({
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
      const findOneRes = await notificationStrategiesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await notificationStrategiesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await notificationStrategiesCrudController.update({
        id: '1',
        name: 'string2',
        code: 'string2',
        desc: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await notificationStrategiesCrudController.findOne(
        {
          id: '1',
        },
      );
      expect(findUpdatedRes).toMatchObject({ name: 'string2' });

      // ACT - DELETE
      await notificationStrategiesCrudController.delete({
        id: '1',
      });
      await expect(
        notificationStrategiesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
