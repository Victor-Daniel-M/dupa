import { InviteMeta } from '@core/domain/entities/invite';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class InviteMetaRepositoryImpl extends BaseRepository<InviteMeta> {}
