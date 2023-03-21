import { Place } from '@core/domain/entities/places';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class PlaceRepositoryImpl extends BaseRepository<Place> {}
