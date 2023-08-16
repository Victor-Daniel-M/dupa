import { UserMeta } from '@db/domain/entities/user';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserMetaRepositoryImpl extends BaseRepository<UserMeta> {
  constructor(
    @InjectRepository(UserMeta)
    public repository: Repository<UserMeta>,
  ) {
    super(repository);
  }
}
