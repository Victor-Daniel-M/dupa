import { ConfigRepositoryImpl } from '@core/infrastructure/repositories/configs-repository';
import { ConfigsDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/configs.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ConfigsDeleteUsecase {
  private configRepository: ConfigRepositoryImpl;

  constructor({
    configRepository,
  }: {
    configRepository: ConfigRepositoryImpl;
  }) {
    this.configRepository = configRepository;
  }

  async execute(data: z.infer<typeof ConfigsDeleteSchema>) {
    // @ts-ignore
    const config = await this.configRepository.delete(data.id!);
    return config;
  }
}