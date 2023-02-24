import { RequestUserRepositoryImpl } from '@core/infrastructure/repositories/request-users-repository';
import { RequestUsersUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestUsers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestUsersUpdateUsecase {
  private requestUserRepository: RequestUserRepositoryImpl;

  constructor({
    requestUserRepository,
  }: {
    requestUserRepository: RequestUserRepositoryImpl;
  }) {
    this.requestUserRepository = requestUserRepository;
  }

  async execute(data: z.infer<typeof RequestUsersUpdateSchema>) {
    // @ts-ignore
    const requestUser = await this.requestUserRepository.update(data.id!, data);;
    return requestUser;
  }
}