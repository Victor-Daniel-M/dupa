import { Permission } from '@core/domain/entities/permissions';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class PermissionRepositoryImpl extends BaseRepository<Permission> {}
