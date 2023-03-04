import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedules-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { SchedulesCrudController } from '../crud-controllers/schedules.crud.controllers';

describe('schedules Controller', () => {
  let schedulesCrudController: SchedulesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SchedulesCrudController],
      providers: [
        ScheduleRepositoryImpl,
        {
          provide: ScheduleRepositoryImpl,
          useValue: createMock<ScheduleRepositoryImpl>(
            new ScheduleRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    schedulesCrudController = moduleRef.get(SchedulesCrudController);
  });

  describe('CRUD Schedules', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await schedulesCrudController.create({
        id: '1',
        openAt: 'string',
        closeAt: 'string',
        entityName: 'string',
        entityId: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        scheduleId: 'string',
        dayOfWeek: 'DayOfWeek',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await schedulesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await schedulesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await schedulesCrudController.update({
        id: '1',
        openAt: 'string2',
        closeAt: 'string2',
        entityName: 'string2',
        entityId: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
        scheduleId: 'string2',
        dayOfWeek: 'DayOfWeek2',
      });
      const findUpdatedRes = await schedulesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ openAt: 'string2' });

      // ACT - DELETE
      await schedulesCrudController.delete({
        id: '1',
      });
      await expect(
        schedulesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
