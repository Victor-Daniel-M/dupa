import { ReactionsCreateUsecase } from '@core/application/usecases/crud-usecases/reactions-create';
import { ReactionsDeleteUsecase } from '@core/application/usecases/crud-usecases/reactions-delete';
import { ReactionsGetUsecase } from '@core/application/usecases/crud-usecases/reactions-get';
import { ReactionsUpdateUsecase } from '@core/application/usecases/crud-usecases/reactions-update';
import { ReactionsViewUsecase } from '@core/application/usecases/crud-usecases/reactions-view';
import { ReactionRepositoryImpl } from '@core/infrastructure/repositories/reactions-repository';
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
  ReactionsCreateDto,
  ReactionsDeleteDto,
  ReactionsGetDto,
  ReactionsUpdateDto,
  ReactionsViewDto,
} from '../dtos/crud-dtos/reactions.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('reactions')
export class ReactionsCrudController {
  constructor(private repositoryImpl: ReactionRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: ReactionsGetDto) {
    const reactionsGetUsecase = new ReactionsGetUsecase({
      reactionRepository: this.repositoryImpl,
    });

    const res = await reactionsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: ReactionsViewDto) {
    const reactionsViewUsecase = new ReactionsViewUsecase({
      reactionRepository: this.repositoryImpl,
    });

    const res = await reactionsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: ReactionsCreateDto) {
    const reactionsCreateUsecase = new ReactionsCreateUsecase({
      reactionRepository: this.repositoryImpl,
    });

    const res = await reactionsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: ReactionsUpdateDto) {
    const reactionsUpdateUsecase = new ReactionsUpdateUsecase({
      reactionRepository: this.repositoryImpl,
    });

    const res = await reactionsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: ReactionsDeleteDto) {
    const reactionsDeleteUsecase = new ReactionsDeleteUsecase({
      reactionRepository: this.repositoryImpl,
    });

    const res = await reactionsDeleteUsecase.execute(body);

    return res;
  }
}


