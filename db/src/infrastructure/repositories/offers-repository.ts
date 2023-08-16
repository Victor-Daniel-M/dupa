import { Offer } from '@db/domain/entities/offers';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class OfferRepositoryImpl extends BaseRepository<Offer> {
  constructor(
    @InjectRepository(Offer)
    public repository: Repository<Offer>,
  ) {
    super(repository);
  }
}
