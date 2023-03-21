import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageRepositoryImpl } from '@core/infrastructure/repositories/messages-repository';
import { BaseController } from 'base/base.controller';
import { Message } from '@core/domain/entities/message';

@ApiTags('messages')
@Controller('messages')
export class MessageController extends BaseController<Message> {
  constructor(private readonly messageRepository: MessageRepositoryImpl) {
    super(messageRepository);
  }
}
