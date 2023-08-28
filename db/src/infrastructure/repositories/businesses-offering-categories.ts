import { BusinessOfferingCategory } from '@db/domain/entities/businessOfferingCategory';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessOfferingCategoryRepositoryImpl extends BaseRepository<BusinessOfferingCategory> {
  constructor(
    @InjectRepository(BusinessOfferingCategory)
    public repository: Repository<BusinessOfferingCategory>,
  ) {
    super(repository);
  }
}
