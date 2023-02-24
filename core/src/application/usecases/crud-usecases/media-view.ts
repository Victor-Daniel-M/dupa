import { MediaRepositoryImpl } from '@core/infrastructure/repositories/media-repository';
import { MediaViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/media.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MediaViewUsecase {
  private mediaRepository: MediaRepositoryImpl;

  constructor({
    mediaRepository,
  }: {
    mediaRepository: MediaRepositoryImpl;
  }) {
    this.mediaRepository = mediaRepository;
  }

  async execute(data: z.infer<typeof MediaViewSchema>) {
    // @ts-ignore
    const media = await this.mediaRepository.findOrThrow(data);
    return media;
  }
}