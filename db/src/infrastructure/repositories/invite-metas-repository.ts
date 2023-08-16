import { InviteMeta } from '@db/domain/entities/invite';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class InviteMetaRepositoryImpl extends BaseRepository<InviteMeta> {
  constructor(
    @InjectRepository(InviteMeta)
    public repository: Repository<InviteMeta>,
  ) {
    super(repository);
  }
}
