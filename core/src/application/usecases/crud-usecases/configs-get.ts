import { ConfigRepositoryImpl } from '@core/infrastructure/repositories/configs-repository';
import { ConfigsGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/configs.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ConfigsGetUsecase {
  private configRepository: ConfigRepositoryImpl;

  constructor({
    configRepository,
  }: {
    configRepository: ConfigRepositoryImpl;
  }) {
    this.configRepository = configRepository;
  }

  async execute(data: z.infer<typeof ConfigsGetSchema>) {
    // @ts-ignore
    const config = await this.configRepository.findAll();
    return config;
  }
}