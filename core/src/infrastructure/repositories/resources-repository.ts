import { Resource } from '@core/domain/entities/resource';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class ResourceRepositoryImpl extends RepositoryImpl<Resource> {}
