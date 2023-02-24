import { Permission } from '@core/domain/entities/permissions';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class PermissionRepositoryImpl extends RepositoryImpl<Permission> {}
