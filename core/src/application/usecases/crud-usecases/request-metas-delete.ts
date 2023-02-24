import { RequestMetaRepositoryImpl } from '@core/infrastructure/repositories/request-metas-repository';
import { RequestMetasDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestMetasDeleteUsecase {
  private requestMetaRepository: RequestMetaRepositoryImpl;

  constructor({
    requestMetaRepository,
  }: {
    requestMetaRepository: RequestMetaRepositoryImpl;
  }) {
    this.requestMetaRepository = requestMetaRepository;
  }

  async execute(data: z.infer<typeof RequestMetasDeleteSchema>) {
    // @ts-ignore
    const requestMeta = await this.requestMetaRepository.delete(data.id!);
    return requestMeta;
  }
}