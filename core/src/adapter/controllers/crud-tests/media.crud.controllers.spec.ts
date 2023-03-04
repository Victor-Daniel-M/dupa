import { MediaRepositoryImpl } from '@core/infrastructure/repositories/media-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { MediaCrudController } from '../crud-controllers/media.crud.controllers';

describe('media Controller', () => {
  let mediaCrudController: MediaCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MediaCrudController],
      providers: [
        MediaRepositoryImpl,
        {
          provide: MediaRepositoryImpl,
          useValue: createMock<MediaRepositoryImpl>(new MediaRepositoryImpl()),
        },
      ],
    }).compile();

    mediaCrudController = moduleRef.get(MediaCrudController);
  });

  describe('CRUD Media', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await mediaCrudController.create({
        id: '1',
        entityId: 'string',
        entityName: 'string',
        value: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        mediaType: 'MediaType',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await mediaCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await mediaCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await mediaCrudController.update({
        id: '1',
        entityId: 'string2',
        entityName: 'string2',
        value: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
        mediaType: 'MediaType2',
      });
      const findUpdatedRes = await mediaCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ entityId: 'string2' });

      // ACT - DELETE
      await mediaCrudController.delete({
        id: '1',
      });
      await expect(
        mediaCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
