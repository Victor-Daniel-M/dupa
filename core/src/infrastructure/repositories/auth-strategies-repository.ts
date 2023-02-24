import { AuthStrategy } from '@core/domain/entities/authStrategies';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class AuthStrategyRepositoryImpl extends RepositoryImpl<AuthStrategy> {}
