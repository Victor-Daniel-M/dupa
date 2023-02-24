import { TokenRepositoryImpl } from '@core/infrastructure/repositories/tokens-repository';
import { TokensGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/tokens.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class TokensGetUsecase {
  private tokenRepository: TokenRepositoryImpl;

  constructor({
    tokenRepository,
  }: {
    tokenRepository: TokenRepositoryImpl;
  }) {
    this.tokenRepository = tokenRepository;
  }

  async execute(data: z.infer<typeof TokensGetSchema>) {
    // @ts-ignore
    const token = await this.tokenRepository.findAll();
    return token;
  }
}