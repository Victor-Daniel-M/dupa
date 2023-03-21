import { Config } from '@core/domain/entities/configs';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class ConfigRepositoryImpl extends BaseRepository<Config> {}
