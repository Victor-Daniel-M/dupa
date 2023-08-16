import { Config } from '@db/domain/entities/configs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ConfigRepositoryImpl extends BaseRepository<Config> {
  constructor(
    @InjectRepository(Config)
    public repository: Repository<Config>,
  ) {
    super(repository);
  }
}
