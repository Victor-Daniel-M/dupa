import { MediaCreateUsecase } from '@core/application/usecases/crud-usecases/media-create';
import { MediaDeleteUsecase } from '@core/application/usecases/crud-usecases/media-delete';
import { MediaGetUsecase } from '@core/application/usecases/crud-usecases/media-get';
import { MediaUpdateUsecase } from '@core/application/usecases/crud-usecases/media-update';
import { MediaViewUsecase } from '@core/application/usecases/crud-usecases/media-view';
import { MediaRepositoryImpl } from '@core/infrastructure/repositories/media-repository';
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
  MediaCreateDto,
  MediaDeleteDto,
  MediaGetDto,
  MediaUpdateDto,
  MediaViewDto,
} from '../dtos/crud-dtos/media.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('media')
export class MediaCrudController {
  constructor(private repositoryImpl: MediaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: MediaGetDto) {
    const mediaGetUsecase = new MediaGetUsecase({
      mediaRepository: this.repositoryImpl,
    });

    const res = await mediaGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: MediaViewDto) {
    const mediaViewUsecase = new MediaViewUsecase({
      mediaRepository: this.repositoryImpl,
    });

    const res = await mediaViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: MediaCreateDto) {
    const mediaCreateUsecase = new MediaCreateUsecase({
      mediaRepository: this.repositoryImpl,
    });

    const res = await mediaCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: MediaUpdateDto) {
    const mediaUpdateUsecase = new MediaUpdateUsecase({
      mediaRepository: this.repositoryImpl,
    });

    const res = await mediaUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: MediaDeleteDto) {
    const mediaDeleteUsecase = new MediaDeleteUsecase({
      mediaRepository: this.repositoryImpl,
    });

    const res = await mediaDeleteUsecase.execute(body);

    return res;
  }
}


