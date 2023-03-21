import { Property } from '@core/domain/entities/property';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class PropertyRepositoryImpl extends BaseRepository<Property> {}
