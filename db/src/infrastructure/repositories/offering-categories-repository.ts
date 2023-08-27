import { OfferingCategory } from '@db/domain/entities/offering';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class OfferingCategoryRepositoryImpl extends BaseRepository<OfferingCategory> {
  constructor(
    @InjectRepository(OfferingCategory)
    public repository: Repository<OfferingCategory>,
  ) {
    super(repository);
  }
}
