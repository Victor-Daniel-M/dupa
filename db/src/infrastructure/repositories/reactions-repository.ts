import { Reaction } from '@db/domain/entities/reaction';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ReactionRepositoryImpl extends BaseRepository<Reaction> {
  constructor(
    @InjectRepository(Reaction)
    public repository: Repository<Reaction>,
  ) {
    super(repository);
  }
}
