import { Token } from '@db/domain/entities/tokens';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class TokenRepositoryImpl extends BaseRepository<Token> {}
