import { UserPropertyRepositoryImpl } from '@core/infrastructure/repositories/user-properties-repository';
import { UserPropertiesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/userProperties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserPropertiesUpdateUsecase {
  private userPropertyRepository: UserPropertyRepositoryImpl;

  constructor({
    userPropertyRepository,
  }: {
    userPropertyRepository: UserPropertyRepositoryImpl;
  }) {
    this.userPropertyRepository = userPropertyRepository;
  }

  async execute(data: z.infer<typeof UserPropertiesUpdateSchema>) {
    // @ts-ignore
    const userProperty = await this.userPropertyRepository.update(data.id!, data);;
    return userProperty;
  }
}