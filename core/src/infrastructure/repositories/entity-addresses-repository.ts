import { EntityAddress } from '@core/domain/entities/address';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class EntityAddressRepositoryImpl extends RepositoryImpl<EntityAddress> {}
