import { Offer } from '@core/domain/entities/offers';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class OfferRepositoryImpl extends BaseRepository<Offer> {}
