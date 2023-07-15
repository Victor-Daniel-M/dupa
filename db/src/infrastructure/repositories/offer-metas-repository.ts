import { OfferMeta } from '@db/domain/entities/offers';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class OfferMetaRepositoryImpl extends BaseRepository<OfferMeta> {}
