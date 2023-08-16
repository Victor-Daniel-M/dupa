import { Charge } from '@db/domain/entities/charges';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ChargeRepositoryImpl extends BaseRepository<Charge> {
  constructor(
    @InjectRepository(Charge)
    public repository: Repository<Charge>,
  ) {
    super(repository);
  }
}
