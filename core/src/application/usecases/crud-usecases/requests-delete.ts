import { RequestRepositoryImpl } from '@core/infrastructure/repositories/requests-repository';
import { RequestsDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/requests.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestsDeleteUsecase {
  private requestRepository: RequestRepositoryImpl;

  constructor({
    requestRepository,
  }: {
    requestRepository: RequestRepositoryImpl;
  }) {
    this.requestRepository = requestRepository;
  }

  async execute(data: z.infer<typeof RequestsDeleteSchema>) {
    // @ts-ignore
    const request = await this.requestRepository.delete(data.id!);
    return request;
  }
}