import { Request } from '@db/domain/entities/requests';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class RequestRepositoryImpl extends BaseRepository<Request> {
  constructor(
    @InjectRepository(Request)
    public repository: Repository<Request>,
  ) {
    super(repository);
  }
}
