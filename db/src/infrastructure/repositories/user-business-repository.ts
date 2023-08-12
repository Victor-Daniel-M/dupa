import { UserBusiness } from '@db/domain/entities/userBusiness';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserBusinessRepositoryImpl extends BaseRepository<UserBusiness> {
  constructor(
    @InjectRepository(UserBusiness)
    public repository: Repository<UserBusiness>,
  ) {
    super(repository);
  }
}
