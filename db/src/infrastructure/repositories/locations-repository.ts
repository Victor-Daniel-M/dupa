import { Location } from '@db/domain/entities/location';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class LocationRepositoryImpl extends BaseRepository<Location> {
  constructor(
    @InjectRepository(Location)
    public repository: Repository<Location>,
  ) {
    super(repository);
  }
}
