import { InviteRepositoryImpl } from '@core/infrastructure/repositories/invites-repository';
import { InvitesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/invites.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InvitesUpdateUsecase {
  private inviteRepository: InviteRepositoryImpl;

  constructor({
    inviteRepository,
  }: {
    inviteRepository: InviteRepositoryImpl;
  }) {
    this.inviteRepository = inviteRepository;
  }

  async execute(data: z.infer<typeof InvitesUpdateSchema>) {
    // @ts-ignore
    const invite = await this.inviteRepository.update(data.id!, data);;
    return invite;
  }
}