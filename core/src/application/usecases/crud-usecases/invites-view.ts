import { InviteRepositoryImpl } from '@core/infrastructure/repositories/invites-repository';
import { InvitesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/invites.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InvitesViewUsecase {
  private inviteRepository: InviteRepositoryImpl;

  constructor({
    inviteRepository,
  }: {
    inviteRepository: InviteRepositoryImpl;
  }) {
    this.inviteRepository = inviteRepository;
  }

  async execute(data: z.infer<typeof InvitesViewSchema>) {
    // @ts-ignore
    const invite = await this.inviteRepository.findOrThrow(data);
    return invite;
  }
}