import { Application } from '@db/domain/entities/application';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicationRepositoryImpl extends BaseRepository<Application> {
  constructor(
    @InjectRepository(Application)
    public repository: Repository<Application>,
  ) {
    super(repository);
  }
}
