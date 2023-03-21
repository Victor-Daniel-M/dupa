import { Request } from '@core/domain/entities/requests';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class RequestRepositoryImpl extends BaseRepository<Request> {}
