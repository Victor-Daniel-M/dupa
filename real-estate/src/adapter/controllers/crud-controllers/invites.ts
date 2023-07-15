import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InviteRepositoryImpl } from '@db/infrastructure/repositories/invites-repository';
import { BaseController } from 'base/base.controller';
import { Invite } from '@db/domain/entities/invite';

@ApiTags('invites')
@Controller('invites')
export class InvitesController extends BaseController<Invite> {
  constructor(private readonly invitesRepository: InviteRepositoryImpl) {
    super(invitesRepository);
  }
}
