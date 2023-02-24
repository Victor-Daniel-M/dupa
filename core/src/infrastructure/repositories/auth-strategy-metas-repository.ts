import { AuthStrategyMeta } from '@core/domain/entities/authStrategies';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class AuthStrategyMetaRepositoryImpl extends RepositoryImpl<AuthStrategyMeta> {}
