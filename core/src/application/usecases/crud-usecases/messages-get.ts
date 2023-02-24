import { MessageRepositoryImpl } from '@core/infrastructure/repositories/messages-repository';
import { MessagesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/messages.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MessagesGetUsecase {
  private messageRepository: MessageRepositoryImpl;

  constructor({
    messageRepository,
  }: {
    messageRepository: MessageRepositoryImpl;
  }) {
    this.messageRepository = messageRepository;
  }

  async execute(data: z.infer<typeof MessagesGetSchema>) {
    // @ts-ignore
    const message = await this.messageRepository.findAll();
    return message;
  }
}