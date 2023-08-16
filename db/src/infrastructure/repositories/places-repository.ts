import { Place } from '@db/domain/entities/places';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceRepositoryImpl extends BaseRepository<Place> {
  constructor(
    @InjectRepository(Place)
    public repository: Repository<Place>,
  ) {
    super(repository);
  }
}
