import { User } from '@core/domain/entities/user';
import { TYPES } from '@core/domain/types';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImpl extends BaseRepository<User> {
  constructor(
    @InjectRepository(User)
    public repository: Repository<User>,
  ) {
    super(repository);
  }
}
