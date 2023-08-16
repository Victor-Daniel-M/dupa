import { Address } from '@db/domain/entities/address';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class AddressRepositoryImpl extends BaseRepository<Address> {
  constructor(
    @InjectRepository(Address)
    public repository: Repository<Address>,
  ) {
    super(repository);
  }
}
