import { InviteRepositoryImpl } from '@core/infrastructure/repositories/invites-repository';
import { InvitesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/invites.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InvitesGetUsecase {
  private inviteRepository: InviteRepositoryImpl;

  constructor({
    inviteRepository,
  }: {
    inviteRepository: InviteRepositoryImpl;
  }) {
    this.inviteRepository = inviteRepository;
  }

  async execute(data: z.infer<typeof InvitesGetSchema>) {
    // @ts-ignore
    const invite = await this.inviteRepository.findAll();
    return invite;
  }
}