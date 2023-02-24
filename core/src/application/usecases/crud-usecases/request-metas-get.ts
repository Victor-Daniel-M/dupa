import { RequestMetaRepositoryImpl } from '@core/infrastructure/repositories/request-metas-repository';
import { RequestMetasGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestMetasGetUsecase {
  private requestMetaRepository: RequestMetaRepositoryImpl;

  constructor({
    requestMetaRepository,
  }: {
    requestMetaRepository: RequestMetaRepositoryImpl;
  }) {
    this.requestMetaRepository = requestMetaRepository;
  }

  async execute(data: z.infer<typeof RequestMetasGetSchema>) {
    // @ts-ignore
    const requestMeta = await this.requestMetaRepository.findAll();
    return requestMeta;
  }
}