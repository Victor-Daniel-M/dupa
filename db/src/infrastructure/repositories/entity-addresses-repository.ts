import { EntityAddress } from '@db/domain/entities/address';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class EntityAddressRepositoryImpl extends BaseRepository<EntityAddress> {}
