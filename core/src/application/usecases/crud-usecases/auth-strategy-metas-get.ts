import { AuthStrategyMetaRepositoryImpl } from '@core/infrastructure/repositories/auth-strategy-metas-repository';
import { AuthStrategyMetasGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategyMetasGetUsecase {
  private authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;

  constructor({
    authStrategyMetaRepository,
  }: {
    authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;
  }) {
    this.authStrategyMetaRepository = authStrategyMetaRepository;
  }

  async execute(data: z.infer<typeof AuthStrategyMetasGetSchema>) {
    // @ts-ignore
    const authStrategyMeta = await this.authStrategyMetaRepository.findAll();
    return authStrategyMeta;
  }
}