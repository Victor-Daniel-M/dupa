import { ReactionRepositoryImpl } from '@core/infrastructure/repositories/reactions-repository';
import { ReactionsGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/reactions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ReactionsGetUsecase {
  private reactionRepository: ReactionRepositoryImpl;

  constructor({
    reactionRepository,
  }: {
    reactionRepository: ReactionRepositoryImpl;
  }) {
    this.reactionRepository = reactionRepository;
  }

  async execute(data: z.infer<typeof ReactionsGetSchema>) {
    // @ts-ignore
    const reaction = await this.reactionRepository.findAll();
    return reaction;
  }
}