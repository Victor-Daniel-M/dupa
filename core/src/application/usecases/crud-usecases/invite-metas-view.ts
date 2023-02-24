import { InviteMetaRepositoryImpl } from '@core/infrastructure/repositories/invite-metas-repository';
import { InviteMetasViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/inviteMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InviteMetasViewUsecase {
  private inviteMetaRepository: InviteMetaRepositoryImpl;

  constructor({
    inviteMetaRepository,
  }: {
    inviteMetaRepository: InviteMetaRepositoryImpl;
  }) {
    this.inviteMetaRepository = inviteMetaRepository;
  }

  async execute(data: z.infer<typeof InviteMetasViewSchema>) {
    // @ts-ignore
    const inviteMeta = await this.inviteMetaRepository.findOrThrow(data);
    return inviteMeta;
  }
}