import { AuthStrategyRepositoryImpl } from '@core/infrastructure/repositories/auth-strategies-repository';
import { AuthStrategiesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategiesCreateUsecase {
  private authStrategyRepository: AuthStrategyRepositoryImpl;

  constructor({
    authStrategyRepository,
  }: {
    authStrategyRepository: AuthStrategyRepositoryImpl;
  }) {
    this.authStrategyRepository = authStrategyRepository;
  }

  async execute(data: z.infer<typeof AuthStrategiesCreateSchema>) {
    // @ts-ignore
    const authStrategy = await this.authStrategyRepository.createOrThrow(data, 'id');
    return authStrategy;
  }
}