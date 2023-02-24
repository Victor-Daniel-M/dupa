import { PermissionRepositoryImpl } from '@core/infrastructure/repositories/permissions-repository';
import { PermissionsCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/permissions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PermissionsCreateUsecase {
  private permissionRepository: PermissionRepositoryImpl;

  constructor({
    permissionRepository,
  }: {
    permissionRepository: PermissionRepositoryImpl;
  }) {
    this.permissionRepository = permissionRepository;
  }

  async execute(data: z.infer<typeof PermissionsCreateSchema>) {
    // @ts-ignore
    const permission = await this.permissionRepository.createOrThrow(data, 'id');
    return permission;
  }
}