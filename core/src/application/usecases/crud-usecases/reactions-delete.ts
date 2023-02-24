import { ReactionRepositoryImpl } from '@core/infrastructure/repositories/reactions-repository';
import { ReactionsDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/reactions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ReactionsDeleteUsecase {
  private reactionRepository: ReactionRepositoryImpl;

  constructor({
    reactionRepository,
  }: {
    reactionRepository: ReactionRepositoryImpl;
  }) {
    this.reactionRepository = reactionRepository;
  }

  async execute(data: z.infer<typeof ReactionsDeleteSchema>) {
    // @ts-ignore
    const reaction = await this.reactionRepository.delete(data.id!);
    return reaction;
  }
}