import { Token } from '@db/domain/entities/tokens';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class TokenRepositoryImpl extends BaseRepository<Token> {
  constructor(
    @InjectRepository(Token)
    public repository: Repository<Token>,
  ) {
    super(repository);
  }
}
