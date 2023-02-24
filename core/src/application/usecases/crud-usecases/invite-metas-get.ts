import { InviteMetaRepositoryImpl } from '@core/infrastructure/repositories/invite-metas-repository';
import { InviteMetasGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/inviteMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InviteMetasGetUsecase {
  private inviteMetaRepository: InviteMetaRepositoryImpl;

  constructor({
    inviteMetaRepository,
  }: {
    inviteMetaRepository: InviteMetaRepositoryImpl;
  }) {
    this.inviteMetaRepository = inviteMetaRepository;
  }

  async execute(data: z.infer<typeof InviteMetasGetSchema>) {
    // @ts-ignore
    const inviteMeta = await this.inviteMetaRepository.findAll();
    return inviteMeta;
  }
}