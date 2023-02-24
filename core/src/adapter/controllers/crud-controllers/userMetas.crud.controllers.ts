import { UserMetasCreateUsecase } from '@core/application/usecases/crud-usecases/user-metas-create';
import { UserMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/user-metas-delete';
import { UserMetasGetUsecase } from '@core/application/usecases/crud-usecases/user-metas-get';
import { UserMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/user-metas-update';
import { UserMetasViewUsecase } from '@core/application/usecases/crud-usecases/user-metas-view';
import { UserMetaRepositoryImpl } from '@core/infrastructure/repositories/user-metas-repository';
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
  UserMetasCreateDto,
  UserMetasDeleteDto,
  UserMetasGetDto,
  UserMetasUpdateDto,
  UserMetasViewDto,
} from '../dtos/crud-dtos/userMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('user-metas')
export class UserMetasCrudController {
  constructor(private repositoryImpl: UserMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: UserMetasGetDto) {
    const userMetasGetUsecase = new UserMetasGetUsecase({
      userMetaRepository: this.repositoryImpl,
    });

    const res = await userMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: UserMetasViewDto) {
    const userMetasViewUsecase = new UserMetasViewUsecase({
      userMetaRepository: this.repositoryImpl,
    });

    const res = await userMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: UserMetasCreateDto) {
    const userMetasCreateUsecase = new UserMetasCreateUsecase({
      userMetaRepository: this.repositoryImpl,
    });

    const res = await userMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: UserMetasUpdateDto) {
    const userMetasUpdateUsecase = new UserMetasUpdateUsecase({
      userMetaRepository: this.repositoryImpl,
    });

    const res = await userMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: UserMetasDeleteDto) {
    const userMetasDeleteUsecase = new UserMetasDeleteUsecase({
      userMetaRepository: this.repositoryImpl,
    });

    const res = await userMetasDeleteUsecase.execute(body);

    return res;
  }
}
