import { UserMeta } from '@core/domain/entities/user';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class UserMetaRepositoryImpl extends RepositoryImpl<UserMeta> {}
