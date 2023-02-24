import { UserPropertyRepositoryImpl } from '@core/infrastructure/repositories/user-properties-repository';
import { UserPropertiesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/userProperties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserPropertiesViewUsecase {
  private userPropertyRepository: UserPropertyRepositoryImpl;

  constructor({
    userPropertyRepository,
  }: {
    userPropertyRepository: UserPropertyRepositoryImpl;
  }) {
    this.userPropertyRepository = userPropertyRepository;
  }

  async execute(data: z.infer<typeof UserPropertiesViewSchema>) {
    // @ts-ignore
    const userProperty = await this.userPropertyRepository.findOrThrow(data);
    return userProperty;
  }
}