import { ReactionRepositoryImpl } from '@core/infrastructure/repositories/reactions-repository';
import { ReactionsViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/reactions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ReactionsViewUsecase {
  private reactionRepository: ReactionRepositoryImpl;

  constructor({
    reactionRepository,
  }: {
    reactionRepository: ReactionRepositoryImpl;
  }) {
    this.reactionRepository = reactionRepository;
  }

  async execute(data: z.infer<typeof ReactionsViewSchema>) {
    // @ts-ignore
    const reaction = await this.reactionRepository.findOrThrow(data);
    return reaction;
  }
}