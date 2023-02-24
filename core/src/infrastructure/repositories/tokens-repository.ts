import { Token } from '@core/domain/entities/tokens';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class TokenRepositoryImpl extends RepositoryImpl<Token> {}
