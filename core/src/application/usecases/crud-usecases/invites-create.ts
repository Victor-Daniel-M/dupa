import { InviteRepositoryImpl } from '@core/infrastructure/repositories/invites-repository';
import { InvitesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/invites.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class InvitesCreateUsecase {
  private inviteRepository: InviteRepositoryImpl;

  constructor({
    inviteRepository,
  }: {
    inviteRepository: InviteRepositoryImpl;
  }) {
    this.inviteRepository = inviteRepository;
  }

  async execute(data: z.infer<typeof InvitesCreateSchema>) {
    // @ts-ignore
    const invite = await this.inviteRepository.createOrThrow(data, 'id');
    return invite;
  }
}