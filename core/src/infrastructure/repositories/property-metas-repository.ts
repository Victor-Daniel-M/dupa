import { PropertyMeta } from '@core/domain/entities/property';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class PropertyMetaRepositoryImpl extends RepositoryImpl<PropertyMeta> {}
