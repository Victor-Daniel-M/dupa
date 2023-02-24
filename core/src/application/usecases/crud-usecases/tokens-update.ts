import { TokenRepositoryImpl } from '@core/infrastructure/repositories/tokens-repository';
import { TokensUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/tokens.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class TokensUpdateUsecase {
  private tokenRepository: TokenRepositoryImpl;

  constructor({
    tokenRepository,
  }: {
    tokenRepository: TokenRepositoryImpl;
  }) {
    this.tokenRepository = tokenRepository;
  }

  async execute(data: z.infer<typeof TokensUpdateSchema>) {
    // @ts-ignore
    const token = await this.tokenRepository.update(data.id!, data);;
    return token;
  }
}