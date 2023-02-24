import { TokenRepositoryImpl } from '@core/infrastructure/repositories/tokens-repository';
import { TokensViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/tokens.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class TokensViewUsecase {
  private tokenRepository: TokenRepositoryImpl;

  constructor({
    tokenRepository,
  }: {
    tokenRepository: TokenRepositoryImpl;
  }) {
    this.tokenRepository = tokenRepository;
  }

  async execute(data: z.infer<typeof TokensViewSchema>) {
    // @ts-ignore
    const token = await this.tokenRepository.findOrThrow(data);
    return token;
  }
}