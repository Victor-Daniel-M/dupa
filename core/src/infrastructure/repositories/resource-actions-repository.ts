import { ResourceAction } from '@core/domain/entities/actions';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class ResourceActionRepositoryImpl extends RepositoryImpl<ResourceAction> {}
