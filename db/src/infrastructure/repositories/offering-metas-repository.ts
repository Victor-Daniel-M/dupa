import { OfferingMeta } from '@db/domain/entities/offering';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class OfferingMetaRepositoryImpl extends BaseRepository<OfferingMeta> {
  constructor(
    @InjectRepository(OfferingMeta)
    public repository: Repository<OfferingMeta>,
  ) {
    super(repository);
  }
}
