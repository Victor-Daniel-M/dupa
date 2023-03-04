import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequencies-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { NotificationFrequenciesCrudController } from '../crud-controllers/notificationFrequencies.crud.controllers';

describe('notificationFrequencies Controller', () => {
  let notificationFrequenciesCrudController: NotificationFrequenciesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [NotificationFrequenciesCrudController],
      providers: [
        NotificationFrequencyRepositoryImpl,
        {
          provide: NotificationFrequencyRepositoryImpl,
          useValue: createMock<NotificationFrequencyRepositoryImpl>(
            new NotificationFrequencyRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    notificationFrequenciesCrudController = moduleRef.get(
      NotificationFrequenciesCrudController,
    );
  });

  describe('CRUD NotificationFrequencies', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await notificationFrequenciesCrudController.create({
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
      const findOneRes = await notificationFrequenciesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await notificationFrequenciesCrudController.findAll(
        {},
      );
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await notificationFrequenciesCrudController.update({
        id: '1',
        name: 'string2',
        code: 'string2',
        desc: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes =
        await notificationFrequenciesCrudController.findOne({
          id: '1',
        });
      expect(findUpdatedRes).toMatchObject({ name: 'string2' });

      // ACT - DELETE
      await notificationFrequenciesCrudController.delete({
        id: '1',
      });
      await expect(
        notificationFrequenciesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
