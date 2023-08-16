import { Action } from '@db/domain/entities/actions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ActionRepositoryImpl extends BaseRepository<Action> {
  constructor(
    @InjectRepository(Action)
    public repository: Repository<Action>,
  ) {
    super(repository);
  }
}
