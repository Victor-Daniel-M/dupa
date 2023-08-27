import { UserOffering } from '@db/domain/entities/userOfferings';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserOfferingRepositoryImpl extends BaseRepository<UserOffering> {
  constructor(
    @InjectRepository(UserOffering)
    private repository: Repository<UserOffering>,
  ) {
    super(repository);
  }
}
