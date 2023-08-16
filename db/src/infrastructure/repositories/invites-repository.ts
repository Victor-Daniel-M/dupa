import { Invite } from '@db/domain/entities/invite';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class InviteRepositoryImpl extends BaseRepository<Invite> {
  constructor(
    @InjectRepository(Invite)
    public repository: Repository<Invite>,
  ) {
    super(repository);
  }
}
