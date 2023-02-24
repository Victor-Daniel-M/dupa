import { ConfigRepositoryImpl } from '@core/infrastructure/repositories/configs-repository';
import { ConfigsViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/configs.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ConfigsViewUsecase {
  private configRepository: ConfigRepositoryImpl;

  constructor({
    configRepository,
  }: {
    configRepository: ConfigRepositoryImpl;
  }) {
    this.configRepository = configRepository;
  }

  async execute(data: z.infer<typeof ConfigsViewSchema>) {
    // @ts-ignore
    const config = await this.configRepository.findOrThrow(data);
    return config;
  }
}