import { RequestMeta, RequestUser } from '@db/domain/entities/requests';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class RequestMetaRepositoryImpl extends BaseRepository<RequestMeta> {
  constructor(
    @InjectRepository(RequestMeta)
    public repository: Repository<RequestMeta>,
  ) {
    super(repository);
  }
}
