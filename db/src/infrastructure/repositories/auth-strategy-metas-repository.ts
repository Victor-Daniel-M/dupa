import { AuthStrategyMeta } from '@db/domain/entities/authStrategies';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class AuthStrategyMetaRepositoryImpl extends BaseRepository<AuthStrategyMeta> {}
