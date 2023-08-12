import { Business } from '@db/domain/entities/business';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessRepositoryImpl extends BaseRepository<Business> {
  constructor(
    @InjectRepository(Business)
    public repository: Repository<Business>,
  ) {
    super(repository);
  }
}
