import { UserProperty } from '@core/domain/entities/userProperties';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class UserPropertyRepositoryImpl extends RepositoryImpl<UserProperty> {}
