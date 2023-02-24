import { PermissionRepositoryImpl } from '@core/infrastructure/repositories/permissions-repository';
import { PermissionsUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/permissions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PermissionsUpdateUsecase {
  private permissionRepository: PermissionRepositoryImpl;

  constructor({
    permissionRepository,
  }: {
    permissionRepository: PermissionRepositoryImpl;
  }) {
    this.permissionRepository = permissionRepository;
  }

  async execute(data: z.infer<typeof PermissionsUpdateSchema>) {
    // @ts-ignore
    const permission = await this.permissionRepository.update(data.id!, data);;
    return permission;
  }
}