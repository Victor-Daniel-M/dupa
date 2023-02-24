import { RequestUserRepositoryImpl } from '@core/infrastructure/repositories/request-users-repository';
import { RequestUsersCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestUsers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestUsersCreateUsecase {
  private requestUserRepository: RequestUserRepositoryImpl;

  constructor({
    requestUserRepository,
  }: {
    requestUserRepository: RequestUserRepositoryImpl;
  }) {
    this.requestUserRepository = requestUserRepository;
  }

  async execute(data: z.infer<typeof RequestUsersCreateSchema>) {
    // @ts-ignore
    const requestUser = await this.requestUserRepository.createOrThrow(data, 'id');
    return requestUser;
  }
}