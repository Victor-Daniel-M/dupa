import { ChargeType } from '@core/domain/entities/charges';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class ChargeTypeRepositoryImpl extends BaseRepository<ChargeType> {}
