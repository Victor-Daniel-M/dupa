import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionRepositoryImpl } from '@core/infrastructure/repositories/permissions-repository';
import { BaseController } from 'base/base.controller';
import { Permission } from '@core/domain/entities/permissions';

@ApiTags('permissions')
@Controller('permissions')
export class PermissionController extends BaseController<Permission> {
  constructor(private readonly permissionRepository: PermissionRepositoryImpl) {
    super(permissionRepository);
  }
}
