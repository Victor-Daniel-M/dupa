import { PermissionRepositoryImpl } from '@core/infrastructure/repositories/permissions-repository';
import { PermissionsViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/permissions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PermissionsViewUsecase {
  private permissionRepository: PermissionRepositoryImpl;

  constructor({
    permissionRepository,
  }: {
    permissionRepository: PermissionRepositoryImpl;
  }) {
    this.permissionRepository = permissionRepository;
  }

  async execute(data: z.infer<typeof PermissionsViewSchema>) {
    // @ts-ignore
    const permission = await this.permissionRepository.findOrThrow(data);
    return permission;
  }
}