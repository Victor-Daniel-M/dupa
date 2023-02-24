import { PermissionRepositoryImpl } from '@core/infrastructure/repositories/permissions-repository';
import { PermissionsGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/permissions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PermissionsGetUsecase {
  private permissionRepository: PermissionRepositoryImpl;

  constructor({
    permissionRepository,
  }: {
    permissionRepository: PermissionRepositoryImpl;
  }) {
    this.permissionRepository = permissionRepository;
  }

  async execute(data: z.infer<typeof PermissionsGetSchema>) {
    // @ts-ignore
    const permission = await this.permissionRepository.findAll();
    return permission;
  }
}