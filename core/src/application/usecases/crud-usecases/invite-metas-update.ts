import { InviteMetaRepositoryImpl } from '@core/infrastructure/repositories/invite-metas-repository';
import { InviteMetasUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/inviteMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InviteMetasUpdateUsecase {
  private inviteMetaRepository: InviteMetaRepositoryImpl;

  constructor({
    inviteMetaRepository,
  }: {
    inviteMetaRepository: InviteMetaRepositoryImpl;
  }) {
    this.inviteMetaRepository = inviteMetaRepository;
  }

  async execute(data: z.infer<typeof InviteMetasUpdateSchema>) {
    // @ts-ignore
    const inviteMeta = await this.inviteMetaRepository.update(data.id!, data);;
    return inviteMeta;
  }
}