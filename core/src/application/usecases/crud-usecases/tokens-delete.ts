import { TokenRepositoryImpl } from '@core/infrastructure/repositories/tokens-repository';
import { TokensDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/tokens.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class TokensDeleteUsecase {
  private tokenRepository: TokenRepositoryImpl;

  constructor({
    tokenRepository,
  }: {
    tokenRepository: TokenRepositoryImpl;
  }) {
    this.tokenRepository = tokenRepository;
  }

  async execute(data: z.infer<typeof TokensDeleteSchema>) {
    // @ts-ignore
    const token = await this.tokenRepository.delete(data.id!);
    return token;
  }
}