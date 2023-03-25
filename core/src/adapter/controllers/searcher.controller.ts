import { SearcherLoginUsecase } from '@core/application/searcher/login';
import { SearcherRegisterUsecase } from '@core/application/searcher/register';
import { TYPES } from '@core/domain/types';
import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import {
  SearcherLoginDto,
  SearcherRegisterDto,
} from '../dtos/searcher.controllers.dto';

@ApiTags('searcher')
@Controller('searcher')
@UseInterceptors(ResponseInterceptor)
export class SearcherController {
  constructor(
    @Inject(TYPES.useCases.SearcherRegisterUsecase)
    private searcherRegisterUsecase: SearcherRegisterUsecase,
    @Inject(TYPES.useCases.SearcherRegisterUsecase)
    private searcherLoginUsecase: SearcherLoginUsecase,
  ) {}

  @Post('register')
  async register(@Body() body: SearcherRegisterDto) {
    return await this.searcherRegisterUsecase.execute({
      body,
    });
  }

  @Post('login')
  async login(@Body() body: SearcherLoginDto) {
    return await this.searcherLoginUsecase.execute({
      body,
    });
  }
}
