import { Resource } from '@core/domain/entities/resource';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class ResourceRepositoryImpl extends BaseRepository<Resource> {}
