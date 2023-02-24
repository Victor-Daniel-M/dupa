import { RequestMetaRepositoryImpl } from '@core/infrastructure/repositories/request-metas-repository';
import { RequestMetasUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestMetasUpdateUsecase {
  private requestMetaRepository: RequestMetaRepositoryImpl;

  constructor({
    requestMetaRepository,
  }: {
    requestMetaRepository: RequestMetaRepositoryImpl;
  }) {
    this.requestMetaRepository = requestMetaRepository;
  }

  async execute(data: z.infer<typeof RequestMetasUpdateSchema>) {
    // @ts-ignore
    const requestMeta = await this.requestMetaRepository.update(data.id!, data);;
    return requestMeta;
  }
}