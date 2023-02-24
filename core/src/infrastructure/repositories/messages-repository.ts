import { Message } from '@core/domain/entities/message';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class MessageRepositoryImpl extends RepositoryImpl<Message> {}
