import { Message } from '@core/domain/entities/message';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class MessageRepositoryImpl extends BaseRepository<Message> {}
