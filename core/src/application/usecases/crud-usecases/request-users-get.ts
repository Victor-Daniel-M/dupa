import { RequestUserRepositoryImpl } from '@core/infrastructure/repositories/request-users-repository';
import { RequestUsersGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestUsers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestUsersGetUsecase {
  private requestUserRepository: RequestUserRepositoryImpl;

  constructor({
    requestUserRepository,
  }: {
    requestUserRepository: RequestUserRepositoryImpl;
  }) {
    this.requestUserRepository = requestUserRepository;
  }

  async execute(data: z.infer<typeof RequestUsersGetSchema>) {
    // @ts-ignore
    const requestUser = await this.requestUserRepository.findAll();
    return requestUser;
  }
}