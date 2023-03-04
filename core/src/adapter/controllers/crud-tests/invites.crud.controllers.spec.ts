import { InviteRepositoryImpl } from '@core/infrastructure/repositories/invites-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { InvitesCrudController } from '../crud-controllers/invites.crud.controllers';

describe('invites Controller', () => {
  let invitesCrudController: InvitesCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [InvitesCrudController],
      providers: [
        InviteRepositoryImpl,
        {
          provide: InviteRepositoryImpl,
          useValue: createMock<InviteRepositoryImpl>(
            new InviteRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    invitesCrudController = moduleRef.get(InvitesCrudController);
  });

  describe('CRUD Invites', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await invitesCrudController.create({
        id: '1',
        text: 'string',
        inviteType: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await invitesCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await invitesCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await invitesCrudController.update({
        id: '1',
        text: 'string2',
        inviteType: 'string2',
        createdAt: 'string2',
        updatedAt: 'string2',
      });
      const findUpdatedRes = await invitesCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ text: 'string2' });

      // ACT - DELETE
      await invitesCrudController.delete({
        id: '1',
      });
      await expect(
        invitesCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});
