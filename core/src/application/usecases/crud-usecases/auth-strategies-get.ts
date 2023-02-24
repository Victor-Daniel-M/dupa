import { AuthStrategyRepositoryImpl } from '@core/infrastructure/repositories/auth-strategies-repository';
import { AuthStrategiesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategiesGetUsecase {
  private authStrategyRepository: AuthStrategyRepositoryImpl;

  constructor({
    authStrategyRepository,
  }: {
    authStrategyRepository: AuthStrategyRepositoryImpl;
  }) {
    this.authStrategyRepository = authStrategyRepository;
  }

  async execute(data: z.infer<typeof AuthStrategiesGetSchema>) {
    // @ts-ignore
    const authStrategy = await this.authStrategyRepository.findAll();
    return authStrategy;
  }
}