import { RequestRepositoryImpl } from '@core/infrastructure/repositories/requests-repository';
import { RequestsGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/requests.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestsGetUsecase {
  private requestRepository: RequestRepositoryImpl;

  constructor({
    requestRepository,
  }: {
    requestRepository: RequestRepositoryImpl;
  }) {
    this.requestRepository = requestRepository;
  }

  async execute(data: z.infer<typeof RequestsGetSchema>) {
    // @ts-ignore
    const request = await this.requestRepository.findAll();
    return request;
  }
}