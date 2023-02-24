import { MessageRepositoryImpl } from '@core/infrastructure/repositories/messages-repository';
import { MessagesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/messages.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class MessagesDeleteUsecase {
  private messageRepository: MessageRepositoryImpl;

  constructor({
    messageRepository,
  }: {
    messageRepository: MessageRepositoryImpl;
  }) {
    this.messageRepository = messageRepository;
  }

  async execute(data: z.infer<typeof MessagesDeleteSchema>) {
    // @ts-ignore
    const message = await this.messageRepository.delete(data.id!);
    return message;
  }
}