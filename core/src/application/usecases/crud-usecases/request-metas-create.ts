import { RequestMetaRepositoryImpl } from '@core/infrastructure/repositories/request-metas-repository';
import { RequestMetasCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestMetasCreateUsecase {
  private requestMetaRepository: RequestMetaRepositoryImpl;

  constructor({
    requestMetaRepository,
  }: {
    requestMetaRepository: RequestMetaRepositoryImpl;
  }) {
    this.requestMetaRepository = requestMetaRepository;
  }

  async execute(data: z.infer<typeof RequestMetasCreateSchema>) {
    // @ts-ignore
    const requestMeta = await this.requestMetaRepository.createOrThrow(data, 'id');
    return requestMeta;
  }
}