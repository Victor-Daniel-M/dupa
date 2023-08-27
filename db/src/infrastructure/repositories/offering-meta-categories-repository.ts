import { OfferingMetaCategory } from '@db/domain/entities/offering';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class OfferingMetaCategoryRepositoryImpl extends BaseRepository<OfferingMetaCategory> {
  constructor(
    @InjectRepository(OfferingMetaCategory)
    public repository: Repository<OfferingMetaCategory>,
  ) {
    super(repository);
  }
}
