import { User } from '@core/domain/entities/user';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class UserRepositoryImpl extends BaseRepository<User> {}
