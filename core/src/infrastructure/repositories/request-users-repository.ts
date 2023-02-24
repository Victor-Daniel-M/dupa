import { RequestUser } from '@core/domain/entities/requests';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class RequestUserRepositoryImpl extends RepositoryImpl<RequestUser> {}
