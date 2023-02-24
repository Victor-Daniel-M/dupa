import { MessageRepositoryImpl } from '@core/infrastructure/repositories/messages-repository';
import { MessagesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/messages.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MessagesViewUsecase {
  private messageRepository: MessageRepositoryImpl;

  constructor({
    messageRepository,
  }: {
    messageRepository: MessageRepositoryImpl;
  }) {
    this.messageRepository = messageRepository;
  }

  async execute(data: z.infer<typeof MessagesViewSchema>) {
    // @ts-ignore
    const message = await this.messageRepository.findOrThrow(data);
    return message;
  }
}