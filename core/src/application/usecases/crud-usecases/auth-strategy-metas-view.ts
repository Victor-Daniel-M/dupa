import { AuthStrategyMetaRepositoryImpl } from '@core/infrastructure/repositories/auth-strategy-metas-repository';
import { AuthStrategyMetasViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategyMetasViewUsecase {
  private authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;

  constructor({
    authStrategyMetaRepository,
  }: {
    authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;
  }) {
    this.authStrategyMetaRepository = authStrategyMetaRepository;
  }

  async execute(data: z.infer<typeof AuthStrategyMetasViewSchema>) {
    // @ts-ignore
    const authStrategyMeta = await this.authStrategyMetaRepository.findOrThrow(data);
    return authStrategyMeta;
  }
}