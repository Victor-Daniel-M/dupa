import { Permission } from '@db/domain/entities/permissions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionRepositoryImpl extends BaseRepository<Permission> {
  constructor(
    @InjectRepository(Permission)
    public repository: Repository<Permission>,
  ) {
    super(repository);
  }
}
