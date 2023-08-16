import { ChargeType } from '@db/domain/entities/charges';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ChargeTypeRepositoryImpl extends BaseRepository<ChargeType> {
  constructor(
    @InjectRepository(ChargeType)
    public repository: Repository<ChargeType>,
  ) {
    super(repository);
  }
}
