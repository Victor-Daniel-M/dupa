import { ReactionRepositoryImpl } from '@core/infrastructure/repositories/reactions-repository';
import { ReactionsCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/reactions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ReactionsCreateUsecase {
  private reactionRepository: ReactionRepositoryImpl;

  constructor({
    reactionRepository,
  }: {
    reactionRepository: ReactionRepositoryImpl;
  }) {
    this.reactionRepository = reactionRepository;
  }

  async execute(data: z.infer<typeof ReactionsCreateSchema>) {
    // @ts-ignore
    const reaction = await this.reactionRepository.createOrThrow(data, 'id');
    return reaction;
  }
}