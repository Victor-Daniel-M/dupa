import { ChargeType } from '@core/domain/entities/charges';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class ChargeTypeRepositoryImpl extends RepositoryImpl<ChargeType> {}
