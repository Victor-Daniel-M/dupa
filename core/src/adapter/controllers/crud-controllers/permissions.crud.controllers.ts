import { PermissionsCreateUsecase } from '@core/application/usecases/crud-usecases/permissions-create';
import { PermissionsDeleteUsecase } from '@core/application/usecases/crud-usecases/permissions-delete';
import { PermissionsGetUsecase } from '@core/application/usecases/crud-usecases/permissions-get';
import { PermissionsUpdateUsecase } from '@core/application/usecases/crud-usecases/permissions-update';
import { PermissionsViewUsecase } from '@core/application/usecases/crud-usecases/permissions-view';
import { PermissionRepositoryImpl } from '@core/infrastructure/repositories/permissions-repository';
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
  PermissionsCreateDto,
  PermissionsDeleteDto,
  PermissionsGetDto,
  PermissionsUpdateDto,
  PermissionsViewDto,
} from '../dtos/crud-dtos/permissions.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('permissions')
export class PermissionsCrudController {
  constructor(private repositoryImpl: PermissionRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PermissionsGetDto) {
    const permissionsGetUsecase = new PermissionsGetUsecase({
      permissionRepository: this.repositoryImpl,
    });

    const res = await permissionsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PermissionsViewDto) {
    const permissionsViewUsecase = new PermissionsViewUsecase({
      permissionRepository: this.repositoryImpl,
    });

    const res = await permissionsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PermissionsCreateDto) {
    const permissionsCreateUsecase = new PermissionsCreateUsecase({
      permissionRepository: this.repositoryImpl,
    });

    const res = await permissionsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PermissionsUpdateDto) {
    const permissionsUpdateUsecase = new PermissionsUpdateUsecase({
      permissionRepository: this.repositoryImpl,
    });

    const res = await permissionsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PermissionsDeleteDto) {
    const permissionsDeleteUsecase = new PermissionsDeleteUsecase({
      permissionRepository: this.repositoryImpl,
    });

    const res = await permissionsDeleteUsecase.execute(body);

    return res;
  }
}


