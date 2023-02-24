import { User } from '@core/domain/entities/user';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class UserRepositoryImpl extends RepositoryImpl<User> {}
