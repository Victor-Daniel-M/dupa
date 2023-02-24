import { ConfigRepositoryImpl } from '@core/infrastructure/repositories/configs-repository';
import { ConfigsUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/configs.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ConfigsUpdateUsecase {
  private configRepository: ConfigRepositoryImpl;

  constructor({
    configRepository,
  }: {
    configRepository: ConfigRepositoryImpl;
  }) {
    this.configRepository = configRepository;
  }

  async execute(data: z.infer<typeof ConfigsUpdateSchema>) {
    // @ts-ignore
    const config = await this.configRepository.update(data.id!, data);;
    return config;
  }
}