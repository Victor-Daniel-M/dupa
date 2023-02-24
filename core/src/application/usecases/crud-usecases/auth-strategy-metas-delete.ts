import { AuthStrategyMetaRepositoryImpl } from '@core/infrastructure/repositories/auth-strategy-metas-repository';
import { AuthStrategyMetasDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategyMetasDeleteUsecase {
  private authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;

  constructor({
    authStrategyMetaRepository,
  }: {
    authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;
  }) {
    this.authStrategyMetaRepository = authStrategyMetaRepository;
  }

  async execute(data: z.infer<typeof AuthStrategyMetasDeleteSchema>) {
    // @ts-ignore
    const authStrategyMeta = await this.authStrategyMetaRepository.delete(data.id!);
    return authStrategyMeta;
  }
}