import { MessageRepositoryImpl } from '@core/infrastructure/repositories/messages-repository';
import { MessagesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/messages.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MessagesCreateUsecase {
  private messageRepository: MessageRepositoryImpl;

  constructor({
    messageRepository,
  }: {
    messageRepository: MessageRepositoryImpl;
  }) {
    this.messageRepository = messageRepository;
  }

  async execute(data: z.infer<typeof MessagesCreateSchema>) {
    // @ts-ignore
    const message = await this.messageRepository.createOrThrow(data, 'id');
    return message;
  }
}