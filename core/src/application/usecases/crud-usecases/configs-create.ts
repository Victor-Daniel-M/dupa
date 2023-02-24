import { ConfigRepositoryImpl } from '@core/infrastructure/repositories/configs-repository';
import { ConfigsCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/configs.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ConfigsCreateUsecase {
  private configRepository: ConfigRepositoryImpl;

  constructor({
    configRepository,
  }: {
    configRepository: ConfigRepositoryImpl;
  }) {
    this.configRepository = configRepository;
  }

  async execute(data: z.infer<typeof ConfigsCreateSchema>) {
    // @ts-ignore
    const config = await this.configRepository.createOrThrow(data, 'id');
    return config;
  }
}