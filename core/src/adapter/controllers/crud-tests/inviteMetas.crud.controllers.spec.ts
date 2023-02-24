import { InviteMetaRepositoryImpl } from '@core/infrastructure/repositories/invite-metas-repository';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { InviteMetasCrudController } from '../crud-controllers/inviteMetas.crud.controllers';

describe('inviteMetas Controller', () => {
  let inviteMetasCrudController: InviteMetasCrudController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [InviteMetasCrudController],
      providers: [
        InviteMetaRepositoryImpl,
        {
          provide: InviteMetaRepositoryImpl,
          useValue: createMock<InviteMetaRepositoryImpl>(
            new InviteMetaRepositoryImpl(),
          ),
        },
      ],
    }).compile();

    inviteMetasCrudController = moduleRef.get(InviteMetasCrudController);
  });

  describe('CRUD InviteMetas', () => {
    it('agent should be able to record a listing', async () => {
      // ACT - CREATE
      const createRes = await inviteMetasCrudController.create({
        id: '1',
        key: 'string',
  value: 'string',
  ref: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  inviteId: 'string',
  valueType: 'MetaValueTypes'
      });
      expect(createRes).toMatchObject({
        id: '1',
      });

      // ACT - GET
      const findOneRes = await inviteMetasCrudController.findOne({
        id: '1',
      });
      expect(findOneRes).toMatchObject({ id: '1' });

      // ACT - FIND ALL
      const findAllRes = await inviteMetasCrudController.findAll({});
      expect(findAllRes).toMatchObject([{ id: '1' }]);

      // ACT - UPDATE
      await inviteMetasCrudController.update({
        id: '1',
        key: 'string2',
  value: 'string2',
  ref: 'string2',
  createdAt: 'string2',
  updatedAt: 'string2',
  inviteId: 'string2',
  valueType: 'MetaValueTypes2'
      });
      const findUpdatedRes = await inviteMetasCrudController.findOne({
        id: '1',
      });
      expect(findUpdatedRes).toMatchObject({ key: 'string2' });

      // ACT - DELETE
      await inviteMetasCrudController.delete({
        id: '1',
      });
      await expect(
        inviteMetasCrudController.findOne({
          id: '1',
        }),
      ).rejects.toThrow();
    });
  });
});    
