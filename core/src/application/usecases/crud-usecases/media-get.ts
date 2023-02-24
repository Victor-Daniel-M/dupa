import { MediaRepositoryImpl } from '@core/infrastructure/repositories/media-repository';
import { MediaGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/media.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MediaGetUsecase {
  private mediaRepository: MediaRepositoryImpl;

  constructor({
    mediaRepository,
  }: {
    mediaRepository: MediaRepositoryImpl;
  }) {
    this.mediaRepository = mediaRepository;
  }

  async execute(data: z.infer<typeof MediaGetSchema>) {
    // @ts-ignore
    const media = await this.mediaRepository.findAll();
    return media;
  }
}