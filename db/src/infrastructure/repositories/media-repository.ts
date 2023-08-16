import { Media } from '@db/domain/entities/media';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class MediaRepositoryImpl extends BaseRepository<Media> {
  constructor(
    @InjectRepository(Media)
    public repository: Repository<Media>,
  ) {
    super(repository);
  }
}
