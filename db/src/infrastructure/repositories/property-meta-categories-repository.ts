import { PropertyMetaCategory } from '@db/domain/entities/property';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class PropertyMetaCategoryRepositoryImpl extends BaseRepository<PropertyMetaCategory> {}
