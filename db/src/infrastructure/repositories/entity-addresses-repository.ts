import { EntityAddress } from '@db/domain/entities/address';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class EntityAddressRepositoryImpl extends BaseRepository<EntityAddress> {
  constructor(
    @InjectRepository(EntityAddress)
    public repository: Repository<EntityAddress>,
  ) {
    super(repository);
  }
}
