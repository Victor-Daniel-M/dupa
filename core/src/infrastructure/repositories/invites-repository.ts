import { Invite } from '@core/domain/entities/invite';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class InviteRepositoryImpl extends BaseRepository<Invite> {}
