import { Config } from '@core/domain/entities/configs';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class ConfigRepositoryImpl extends RepositoryImpl<Config> {}
