import { Location } from '@core/domain/entities/location';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class LocationRepositoryImpl extends BaseRepository<Location> {}
