import { Message } from '@db/domain/entities/message';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class MessageRepositoryImpl extends BaseRepository<Message> {
  constructor(
    @InjectRepository(Message)
    public repository: Repository<Message>,
  ) {
    super(repository);
  }
}
