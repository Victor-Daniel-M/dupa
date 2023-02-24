import { Charge } from '@core/domain/entities/charges';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class ChargeRepositoryImpl extends RepositoryImpl<Charge> {}
