import { UsersCreateUsecase } from '@core/application/usecases/crud-usecases/user-create';
import { UsersDeleteUsecase } from '@core/application/usecases/crud-usecases/user-delete';
import { UsersGetUsecase } from '@core/application/usecases/crud-usecases/user-get';
import { UsersUpdateUsecase } from '@core/application/usecases/crud-usecases/user-update';
import { UsersViewUsecase } from '@core/application/usecases/crud-usecases/user-view';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/user-repository';
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
} from '../dtos/users.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('user')
export class UsersCrudController {
  constructor(private repositoryImpl: UserRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: UsersGetDto) {
    const usersGetUsecase = new UsersGetUsecase({
      usersRepository: this.repositoryImpl,
    });

    const res = await usersGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: UsersViewDto) {
    const usersViewUsecase = new UsersViewUsecase({
      usersRepository: this.repositoryImpl,
    });

    const res = await usersViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: UsersCreateDto) {
    const usersCreateUsecase = new UsersCreateUsecase({
      usersRepository: this.repositoryImpl,
    });

    const res = await usersCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: UsersUpdateDto) {
    const usersUpdateUsecase = new UsersUpdateUsecase({
      usersRepository: this.repositoryImpl,
    });

    const res = await usersUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: UsersDeleteDto) {
    const usersDeleteUsecase = new UsersDeleteUsecase({
      usersRepository: this.repositoryImpl,
    });

    const res = await usersDeleteUsecase.execute(body);

    return res;
  }
}


