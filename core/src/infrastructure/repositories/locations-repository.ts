import { Location } from '@core/domain/entities/location';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class LocationRepositoryImpl extends RepositoryImpl<Location> {}
