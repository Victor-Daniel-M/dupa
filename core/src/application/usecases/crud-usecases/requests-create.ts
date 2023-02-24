import { RequestRepositoryImpl } from '@core/infrastructure/repositories/requests-repository';
import { RequestsCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/requests.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestsCreateUsecase {
  private requestRepository: RequestRepositoryImpl;

  constructor({
    requestRepository,
  }: {
    requestRepository: RequestRepositoryImpl;
  }) {
    this.requestRepository = requestRepository;
  }

  async execute(data: z.infer<typeof RequestsCreateSchema>) {
    // @ts-ignore
    const request = await this.requestRepository.createOrThrow(data, 'id');
    return request;
  }
}