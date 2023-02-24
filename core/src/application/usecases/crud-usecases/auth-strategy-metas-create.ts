import { AuthStrategyMetaRepositoryImpl } from '@core/infrastructure/repositories/auth-strategy-metas-repository';
import { AuthStrategyMetasCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategyMetasCreateUsecase {
  private authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;

  constructor({
    authStrategyMetaRepository,
  }: {
    authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;
  }) {
    this.authStrategyMetaRepository = authStrategyMetaRepository;
  }

  async execute(data: z.infer<typeof AuthStrategyMetasCreateSchema>) {
    // @ts-ignore
    const authStrategyMeta = await this.authStrategyMetaRepository.createOrThrow(data, 'id');
    return authStrategyMeta;
  }
}