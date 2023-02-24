import { ConfigRepositoryImpl } from '@core/infrastructure/repositories/configs-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { ConfigsCrudController } from '../crud-controllers/configs.crud.controllers';

describe('configs Controller', () => {
  let configsCrudController: ConfigsCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ConfigsCrudController],
      providers: [
        ConfigRepositoryImpl,
        {
          provide: ConfigRepositoryImpl,
          useValue: createMock<ConfigRepositoryImpl>(
            new ConfigRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    configsCrudController = moduleRef.get(ConfigsCrudController);
  });

  describe('CRUD Configs', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await configsCrudController.create({
        id: '1',
        text: 'string',
  value: 'string',
  createdAt: 'string',
  updatedAt: 'string'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await configsCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await configsCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await configsCrudController.update({
        id: '1',
        text: 'string2',
  value: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2'
      });
      const findUpdatedRes = await configsCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ text: 'string2' });

      // ACT - DELETE
      await configsCrudController.delete({
        id: '1',
      });
      await expect(
        configsCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
