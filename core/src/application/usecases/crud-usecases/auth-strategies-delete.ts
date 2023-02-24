import { AuthStrategyRepositoryImpl } from '@core/infrastructure/repositories/auth-strategies-repository';
import { AuthStrategiesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/authStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AuthStrategiesDeleteUsecase {
  private authStrategyRepository: AuthStrategyRepositoryImpl;

  constructor({
    authStrategyRepository,
  }: {
    authStrategyRepository: AuthStrategyRepositoryImpl;
  }) {
    this.authStrategyRepository = authStrategyRepository;
  }

  async execute(data: z.infer<typeof AuthStrategiesDeleteSchema>) {
    // @ts-ignore
    const authStrategy = await this.authStrategyRepository.delete(data.id!);
    return authStrategy;
  }
}