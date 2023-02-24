import { Media } from '@core/domain/entities/media';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class MediaRepositoryImpl extends RepositoryImpl<Media> {}
