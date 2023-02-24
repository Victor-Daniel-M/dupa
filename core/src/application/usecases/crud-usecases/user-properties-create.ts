import { UserPropertyRepositoryImpl } from '@core/infrastructure/repositories/user-properties-repository';
import { UserPropertiesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/userProperties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserPropertiesCreateUsecase {
  private userPropertyRepository: UserPropertyRepositoryImpl;

  constructor({
    userPropertyRepository,
  }: {
    userPropertyRepository: UserPropertyRepositoryImpl;
  }) {
    this.userPropertyRepository = userPropertyRepository;
  }

  async execute(data: z.infer<typeof UserPropertiesCreateSchema>) {
    // @ts-ignore
    const userProperty = await this.userPropertyRepository.createOrThrow(data, 'id');
    return userProperty;
  }
}