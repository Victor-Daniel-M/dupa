import { InviteMetaRepositoryImpl } from '@core/infrastructure/repositories/invite-metas-repository';
import { InviteMetasDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/inviteMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InviteMetasDeleteUsecase {
  private inviteMetaRepository: InviteMetaRepositoryImpl;

  constructor({
    inviteMetaRepository,
  }: {
    inviteMetaRepository: InviteMetaRepositoryImpl;
  }) {
    this.inviteMetaRepository = inviteMetaRepository;
  }

  async execute(data: z.infer<typeof InviteMetasDeleteSchema>) {
    // @ts-ignore
    const inviteMeta = await this.inviteMetaRepository.delete(data.id!);
    return inviteMeta;
  }
}