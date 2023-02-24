import { RequestUserRepositoryImpl } from '@core/infrastructure/repositories/request-users-repository';
import { RequestUsersDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/requestUsers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class RequestUsersDeleteUsecase {
  private requestUserRepository: RequestUserRepositoryImpl;

  constructor({
    requestUserRepository,
  }: {
    requestUserRepository: RequestUserRepositoryImpl;
  }) {
    this.requestUserRepository = requestUserRepository;
  }

  async execute(data: z.infer<typeof RequestUsersDeleteSchema>) {
    // @ts-ignore
    const requestUser = await this.requestUserRepository.delete(data.id!);
    return requestUser;
  }
}