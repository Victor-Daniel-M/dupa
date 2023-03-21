import { Media } from '@core/domain/entities/media';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class MediaRepositoryImpl extends BaseRepository<Media> {}
