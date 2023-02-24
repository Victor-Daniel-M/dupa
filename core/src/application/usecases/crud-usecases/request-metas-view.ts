import { RequestMetaRepositoryImpl } from '@core/infrastructure/repositories/request-metas-repository';
import { RequestMetasViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestMetasViewUsecase {
  private requestMetaRepository: RequestMetaRepositoryImpl;

  constructor({
    requestMetaRepository,
  }: {
    requestMetaRepository: RequestMetaRepositoryImpl;
  }) {
    this.requestMetaRepository = requestMetaRepository;
  }

  async execute(data: z.infer<typeof RequestMetasViewSchema>) {
    // @ts-ignore
    const requestMeta = await this.requestMetaRepository.findOrThrow(data);
    return requestMeta;
  }
}