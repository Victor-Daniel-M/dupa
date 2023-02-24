import { MediaRepositoryImpl } from '@core/infrastructure/repositories/media-repository';
import { MediaCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/media.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MediaCreateUsecase {
  private mediaRepository: MediaRepositoryImpl;

  constructor({
    mediaRepository,
  }: {
    mediaRepository: MediaRepositoryImpl;
  }) {
    this.mediaRepository = mediaRepository;
  }

  async execute(data: z.infer<typeof MediaCreateSchema>) {
    // @ts-ignore
    const media = await this.mediaRepository.createOrThrow(data, 'id');
    return media;
  }
}