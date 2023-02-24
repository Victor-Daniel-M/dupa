import { AuthStrategyRepositoryImpl } from '@core/infrastructure/repositories/auth-strategies-repository';
import { AuthStrategiesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategiesViewUsecase {
  private authStrategyRepository: AuthStrategyRepositoryImpl;

  constructor({
    authStrategyRepository,
  }: {
    authStrategyRepository: AuthStrategyRepositoryImpl;
  }) {
    this.authStrategyRepository = authStrategyRepository;
  }

  async execute(data: z.infer<typeof AuthStrategiesViewSchema>) {
    // @ts-ignore
    const authStrategy = await this.authStrategyRepository.findOrThrow(data);
    return authStrategy;
  }
}