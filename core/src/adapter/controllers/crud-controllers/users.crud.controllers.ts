import { UsersCreateUsecase } from '@core/application/usecases/crud-usecases/users-create';
import { UsersDeleteUsecase } from '@core/application/usecases/crud-usecases/users-delete';
import { UsersGetUsecase } from '@core/application/usecases/crud-usecases/users-get';
import { UsersUpdateUsecase } from '@core/application/usecases/crud-usecases/users-update';
import { UsersViewUsecase } from '@core/application/usecases/crud-usecases/users-view';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
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
  UsersCreateDto,
  UsersDeleteDto,
  UsersGetDto,
  UsersUpdateDto,
  UsersViewDto,
} from '../dtos/crud-dtos/users.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('users')
export class UsersCrudController {
  constructor(private repositoryImpl: UserRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: UsersGetDto) {
    const usersGetUsecase = new UsersGetUsecase({
      userRepository: this.repositoryImpl,
    });

    const res = await usersGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: UsersViewDto) {
    const usersViewUsecase = new UsersViewUsecase({
      userRepository: this.repositoryImpl,
    });

    const res = await usersViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: UsersCreateDto) {
    const usersCreateUsecase = new UsersCreateUsecase({
      userRepository: this.repositoryImpl,
    });

    const res = await usersCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: UsersUpdateDto) {
    const usersUpdateUsecase = new UsersUpdateUsecase({
      userRepository: this.repositoryImpl,
    });

    const res = await usersUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: UsersDeleteDto) {
    const usersDeleteUsecase = new UsersDeleteUsecase({
      userRepository: this.repositoryImpl,
    });

    const res = await usersDeleteUsecase.execute(body);

    return res;
  }
}


