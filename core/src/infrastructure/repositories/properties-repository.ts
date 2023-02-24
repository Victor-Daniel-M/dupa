import { Property } from '@core/domain/entities/property';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class PropertyRepositoryImpl extends RepositoryImpl<Property> {}
