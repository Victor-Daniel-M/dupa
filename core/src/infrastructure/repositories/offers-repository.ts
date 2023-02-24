import { Offer } from '@core/domain/entities/offers';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class OfferRepositoryImpl extends RepositoryImpl<Offer> {}
