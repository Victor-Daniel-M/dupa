import { RequestRepositoryImpl } from '@core/infrastructure/repositories/requests-repository';
import { RequestsViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/requests.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestsViewUsecase {
  private requestRepository: RequestRepositoryImpl;

  constructor({
    requestRepository,
  }: {
    requestRepository: RequestRepositoryImpl;
  }) {
    this.requestRepository = requestRepository;
  }

  async execute(data: z.infer<typeof RequestsViewSchema>) {
    // @ts-ignore
    const request = await this.requestRepository.findOrThrow(data);
    return request;
  }
}