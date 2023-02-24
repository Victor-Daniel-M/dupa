import { ReactionRepositoryImpl } from '@core/infrastructure/repositories/reactions-repository';
import { ReactionsUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/reactions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ReactionsUpdateUsecase {
  private reactionRepository: ReactionRepositoryImpl;

  constructor({
    reactionRepository,
  }: {
    reactionRepository: ReactionRepositoryImpl;
  }) {
    this.reactionRepository = reactionRepository;
  }

  async execute(data: z.infer<typeof ReactionsUpdateSchema>) {
    // @ts-ignore
    const reaction = await this.reactionRepository.update(data.id!, data);;
    return reaction;
  }
}