import { PlaceMeta } from '@db/domain/entities/places';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceMetaRepositoryImpl extends BaseRepository<PlaceMeta> {
  constructor(
    @InjectRepository(PlaceMeta)
    public repository: Repository<PlaceMeta>,
  ) {
    super(repository);
  }
}
