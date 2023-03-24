import { UserProperty } from '@core/domain/entities/userProperties';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserPropertyRepositoryImpl extends BaseRepository<UserProperty> {
  constructor(
    @InjectRepository(UserProperty)
    private repository: Repository<UserProperty>,
  ) {
    super(repository);
  }
}
