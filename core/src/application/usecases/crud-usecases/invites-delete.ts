import { InviteRepositoryImpl } from '@core/infrastructure/repositories/invites-repository';
import { InvitesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/invites.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InvitesDeleteUsecase {
  private inviteRepository: InviteRepositoryImpl;

  constructor({
    inviteRepository,
  }: {
    inviteRepository: InviteRepositoryImpl;
  }) {
    this.inviteRepository = inviteRepository;
  }

  async execute(data: z.infer<typeof InvitesDeleteSchema>) {
    // @ts-ignore
    const invite = await this.inviteRepository.delete(data.id!);
    return invite;
  }
}