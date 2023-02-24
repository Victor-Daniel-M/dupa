import { UserPropertyRepositoryImpl } from '@core/infrastructure/repositories/user-properties-repository';
import { UserPropertiesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/userProperties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserPropertiesGetUsecase {
  private userPropertyRepository: UserPropertyRepositoryImpl;

  constructor({
    userPropertyRepository,
  }: {
    userPropertyRepository: UserPropertyRepositoryImpl;
  }) {
    this.userPropertyRepository = userPropertyRepository;
  }

  async execute(data: z.infer<typeof UserPropertiesGetSchema>) {
    // @ts-ignore
    const userProperty = await this.userPropertyRepository.findAll();
    return userProperty;
  }
}