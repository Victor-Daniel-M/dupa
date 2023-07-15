import { Address } from '@db/domain/entities/address';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class AddressRepositoryImpl extends BaseRepository<Address> {}