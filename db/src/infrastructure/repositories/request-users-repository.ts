import { RequestUser } from '@db/domain/entities/requests';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class RequestUserRepositoryImpl extends BaseRepository<RequestUser> {
  constructor(
    @InjectRepository(RequestUser)
    public repository: Repository<RequestUser>,
  ) {
    super(repository);
  }
}
