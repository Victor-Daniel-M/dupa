import { InviteMeta } from '@core/domain/entities/invite';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class InviteMetaRepositoryImpl extends RepositoryImpl<InviteMeta> {}
