import { Address } from '@core/domain/entities/address';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class AddressRepositoryImpl extends RepositoryImpl<Address> {}
