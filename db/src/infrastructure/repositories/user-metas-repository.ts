import { UserMeta } from '@db/domain/entities/user';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class UserMetaRepositoryImpl extends BaseRepository<UserMeta> {}
