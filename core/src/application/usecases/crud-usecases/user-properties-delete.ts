import { UserPropertyRepositoryImpl } from '@core/infrastructure/repositories/user-properties-repository';
import { UserPropertiesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/userProperties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserPropertiesDeleteUsecase {
  private userPropertyRepository: UserPropertyRepositoryImpl;

  constructor({
    userPropertyRepository,
  }: {
    userPropertyRepository: UserPropertyRepositoryImpl;
  }) {
    this.userPropertyRepository = userPropertyRepository;
  }

  async execute(data: z.infer<typeof UserPropertiesDeleteSchema>) {
    // @ts-ignore
    const userProperty = await this.userPropertyRepository.delete(data.id!);
    return userProperty;
  }
}