import { TokensCreateUsecase } from '@core/application/usecases/crud-usecases/tokens-create';
import { TokensDeleteUsecase } from '@core/application/usecases/crud-usecases/tokens-delete';
import { TokensGetUsecase } from '@core/application/usecases/crud-usecases/tokens-get';
import { TokensUpdateUsecase } from '@core/application/usecases/crud-usecases/tokens-update';
import { TokensViewUsecase } from '@core/application/usecases/crud-usecases/tokens-view';
import { TokenRepositoryImpl } from '@core/infrastructure/repositories/tokens-repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import {
  TokensCreateDto,
  TokensDeleteDto,
  TokensGetDto,
  TokensUpdateDto,
  TokensViewDto,
} from '../dtos/crud-dtos/tokens.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('tokens')
export class TokensCrudController {
  constructor(private repositoryImpl: TokenRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: TokensGetDto) {
    const tokensGetUsecase = new TokensGetUsecase({
      tokenRepository: this.repositoryImpl,
    });

    const res = await tokensGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: TokensViewDto) {
    const tokensViewUsecase = new TokensViewUsecase({
      tokenRepository: this.repositoryImpl,
    });

    const res = await tokensViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: TokensCreateDto) {
    const tokensCreateUsecase = new TokensCreateUsecase({
      tokenRepository: this.repositoryImpl,
    });

    const res = await tokensCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: TokensUpdateDto) {
    const tokensUpdateUsecase = new TokensUpdateUsecase({
      tokenRepository: this.repositoryImpl,
    });

    const res = await tokensUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: TokensDeleteDto) {
    const tokensDeleteUsecase = new TokensDeleteUsecase({
      tokenRepository: this.repositoryImpl,
    });

    const res = await tokensDeleteUsecase.execute(body);

    return res;
  }
}


