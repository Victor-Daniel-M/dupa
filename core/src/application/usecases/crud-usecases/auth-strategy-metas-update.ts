import { AuthStrategyMetaRepositoryImpl } from '@core/infrastructure/repositories/auth-strategy-metas-repository';
import { AuthStrategyMetasUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategyMetasUpdateUsecase {
  private authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;

  constructor({
    authStrategyMetaRepository,
  }: {
    authStrategyMetaRepository: AuthStrategyMetaRepositoryImpl;
  }) {
    this.authStrategyMetaRepository = authStrategyMetaRepository;
  }

  async execute(data: z.infer<typeof AuthStrategyMetasUpdateSchema>) {
    // @ts-ignore
    const authStrategyMeta = await this.authStrategyMetaRepository.update(data.id!, data);;
    return authStrategyMeta;
  }
}