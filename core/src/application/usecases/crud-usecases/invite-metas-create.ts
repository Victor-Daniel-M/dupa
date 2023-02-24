import { InviteMetaRepositoryImpl } from '@core/infrastructure/repositories/invite-metas-repository';
import { InviteMetasCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/inviteMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InviteMetasCreateUsecase {
  private inviteMetaRepository: InviteMetaRepositoryImpl;

  constructor({
    inviteMetaRepository,
  }: {
    inviteMetaRepository: InviteMetaRepositoryImpl;
  }) {
    this.inviteMetaRepository = inviteMetaRepository;
  }

  async execute(data: z.infer<typeof InviteMetasCreateSchema>) {
    // @ts-ignore
    const inviteMeta = await this.inviteMetaRepository.createOrThrow(data, 'id');
    return inviteMeta;
  }
}