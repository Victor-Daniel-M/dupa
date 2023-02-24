import { RequestRepositoryImpl } from '@core/infrastructure/repositories/requests-repository';
import { RequestsUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/requests.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestsUpdateUsecase {
  private requestRepository: RequestRepositoryImpl;

  constructor({
    requestRepository,
  }: {
    requestRepository: RequestRepositoryImpl;
  }) {
    this.requestRepository = requestRepository;
  }

  async execute(data: z.infer<typeof RequestsUpdateSchema>) {
    // @ts-ignore
    const request = await this.requestRepository.update(data.id!, data);;
    return request;
  }
}