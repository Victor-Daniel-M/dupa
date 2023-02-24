import { MediaRepositoryImpl } from '@core/infrastructure/repositories/media-repository';
import { MediaDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/media.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MediaDeleteUsecase {
  private mediaRepository: MediaRepositoryImpl;

  constructor({
    mediaRepository,
  }: {
    mediaRepository: MediaRepositoryImpl;
  }) {
    this.mediaRepository = mediaRepository;
  }

  async execute(data: z.infer<typeof MediaDeleteSchema>) {
    // @ts-ignore
    const media = await this.mediaRepository.delete(data.id!);
    return media;
  }
}