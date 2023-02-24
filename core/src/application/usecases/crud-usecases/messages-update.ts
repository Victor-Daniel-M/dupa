import { MessageRepositoryImpl } from '@core/infrastructure/repositories/messages-repository';
import { MessagesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/messages.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MessagesUpdateUsecase {
  private messageRepository: MessageRepositoryImpl;

  constructor({
    messageRepository,
  }: {
    messageRepository: MessageRepositoryImpl;
  }) {
    this.messageRepository = messageRepository;
  }

  async execute(data: z.infer<typeof MessagesUpdateSchema>) {
    // @ts-ignore
    const message = await this.messageRepository.update(data.id!, data);;
    return message;
  }
}