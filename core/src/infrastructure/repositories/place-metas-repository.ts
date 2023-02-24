import { PlaceMeta } from '@core/domain/entities/places';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class PlaceMetaRepositoryImpl extends RepositoryImpl<PlaceMeta> {}
