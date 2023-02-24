import { PermissionRepositoryImpl } from '@core/infrastructure/repositories/permissions-repository';
import { PermissionsDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/permissions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PermissionsDeleteUsecase {
  private permissionRepository: PermissionRepositoryImpl;

  constructor({
    permissionRepository,
  }: {
    permissionRepository: PermissionRepositoryImpl;
  }) {
    this.permissionRepository = permissionRepository;
  }

  async execute(data: z.infer<typeof PermissionsDeleteSchema>) {
    // @ts-ignore
    const permission = await this.permissionRepository.delete(data.id!);
    return permission;
  }
}