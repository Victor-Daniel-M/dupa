import { UserProperty } from '@core/domain/entities/userProperties';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class UserPropertyRepositoryImpl extends BaseRepository<UserProperty> {}
