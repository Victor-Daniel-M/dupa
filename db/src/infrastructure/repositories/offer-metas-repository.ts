import { OfferMeta } from '@db/domain/entities/offers';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class OfferMetaRepositoryImpl extends BaseRepository<OfferMeta> {
  constructor(
    @InjectRepository(OfferMeta)
    public repository: Repository<OfferMeta>,
  ) {
    super(repository);
  }
}
