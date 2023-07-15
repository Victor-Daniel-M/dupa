import { SearcherLoginUsecase } from 'real-estate/src/application/searcher/login';
import { SearcherRegisterUsecase } from 'real-estate/src/application/searcher/register';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
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
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherRegisterUsecase)
    private searcherRegisterUsecase: SearcherRegisterUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherRegisterUsecase)
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
