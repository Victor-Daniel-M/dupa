import { Offering } from '@db/domain/entities/offering';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class OfferingRepositoryImpl extends BaseRepository<Offering> {
  constructor(
    @InjectRepository(Offering)
    repository: Repository<Offering>,
  ) {
    super(repository);
  }
}
