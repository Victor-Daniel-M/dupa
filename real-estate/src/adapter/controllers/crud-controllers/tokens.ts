import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TokenRepositoryImpl } from '@db/infrastructure/repositories/tokens-repository';
import { BaseController } from 'base/base.controller';
import { Token } from '@db/domain/entities/tokens';

@ApiTags('tokens')
@Controller('tokens')
export class TokenController extends BaseController<Token> {
  constructor(private readonly tokensRepository: TokenRepositoryImpl) {
    super(tokensRepository);
  }
}
