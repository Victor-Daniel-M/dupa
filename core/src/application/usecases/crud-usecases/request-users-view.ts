import { RequestUserRepositoryImpl } from '@core/infrastructure/repositories/request-users-repository';
import { RequestUsersViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestUsers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestUsersViewUsecase {
  private requestUserRepository: RequestUserRepositoryImpl;

  constructor({
    requestUserRepository,
  }: {
    requestUserRepository: RequestUserRepositoryImpl;
  }) {
    this.requestUserRepository = requestUserRepository;
  }

  async execute(data: z.infer<typeof RequestUsersViewSchema>) {
    // @ts-ignore
    const requestUser = await this.requestUserRepository.findOrThrow(data);
    return requestUser;
  }
}