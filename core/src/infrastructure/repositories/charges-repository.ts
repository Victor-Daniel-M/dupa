import { Charge } from '@core/domain/entities/charges';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class ChargeRepositoryImpl extends BaseRepository<Charge> {}
