import { PlaceMeta } from '@db/domain/entities/places';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class PlaceMetaRepositoryImpl extends BaseRepository<PlaceMeta> {}
