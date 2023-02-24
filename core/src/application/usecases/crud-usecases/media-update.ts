import { MediaRepositoryImpl } from '@core/infrastructure/repositories/media-repository';
import { MediaUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/media.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MediaUpdateUsecase {
  private mediaRepository: MediaRepositoryImpl;

  constructor({
    mediaRepository,
  }: {
    mediaRepository: MediaRepositoryImpl;
  }) {
    this.mediaRepository = mediaRepository;
  }

  async execute(data: z.infer<typeof MediaUpdateSchema>) {
    // @ts-ignore
    const media = await this.mediaRepository.update(data.id!, data);;
    return media;
  }
}