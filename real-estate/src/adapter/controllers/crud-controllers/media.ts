import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MediaRepositoryImpl } from '@db/infrastructure/repositories/media-repository';
import { BaseController } from 'base/base.controller';
import { Media } from '@db/domain/entities/media';

@ApiTags('medias')
@Controller('medias')
export class MediaController extends BaseController<Media> {
  constructor(private readonly mediaRepository: MediaRepositoryImpl) {
    super(mediaRepository);
  }
}
