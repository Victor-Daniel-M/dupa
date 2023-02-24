import { Request } from '@core/domain/entities/requests';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class RequestRepositoryImpl extends RepositoryImpl<Request> {}
