import { OfferMeta } from '@core/domain/entities/offers';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class OfferMetaRepositoryImpl extends RepositoryImpl<OfferMeta> {}
