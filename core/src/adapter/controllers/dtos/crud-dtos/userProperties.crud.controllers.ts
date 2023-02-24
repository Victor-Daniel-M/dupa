import { UserPropertiesCreateUsecase } from '@core/application/usecases/crud-usecases/user-property-create';
import { UserPropertiesDeleteUsecase } from '@core/application/usecases/crud-usecases/user-property-delete';
import { UserPropertiesGetUsecase } from '@core/application/usecases/crud-usecases/user-property-get';
import { UserPropertiesUpdateUsecase } from '@core/application/usecases/crud-usecases/user-property-update';
import { UserPropertiesViewUsecase } from '@core/application/usecases/crud-usecases/user-property-view';
import { UserPropertyRepositoryImpl } from '@core/infrastructure/repositories/user-property-repository';
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
  UserPropertiesCreateDto,
  UserPropertiesDeleteDto,
  UserPropertiesGetDto,
  UserPropertiesUpdateDto,
  UserPropertiesViewDto,
} from '../dtos/userProperties.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('user-property')
export class UserPropertiesCrudController {
  constructor(private repositoryImpl: UserPropertyRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: UserPropertiesGetDto) {
    const userPropertiesGetUsecase = new UserPropertiesGetUsecase({
      userPropertiesRepository: this.repositoryImpl,
    });

    const res = await userPropertiesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: UserPropertiesViewDto) {
    const userPropertiesViewUsecase = new UserPropertiesViewUsecase({
      userPropertiesRepository: this.repositoryImpl,
    });

    const res = await userPropertiesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: UserPropertiesCreateDto) {
    const userPropertiesCreateUsecase = new UserPropertiesCreateUsecase({
      userPropertiesRepository: this.repositoryImpl,
    });

    const res = await userPropertiesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: UserPropertiesUpdateDto) {
    const userPropertiesUpdateUsecase = new UserPropertiesUpdateUsecase({
      userPropertiesRepository: this.repositoryImpl,
    });

    const res = await userPropertiesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: UserPropertiesDeleteDto) {
    const userPropertiesDeleteUsecase = new UserPropertiesDeleteUsecase({
      userPropertiesRepository: this.repositoryImpl,
    });

    const res = await userPropertiesDeleteUsecase.execute(body);

    return res;
  }
}


