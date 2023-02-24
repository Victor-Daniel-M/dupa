import { ActionsViewSchema } from '@core/adapter/controllers/dtos/actions.crud.controllers.dto';
import { ActionRepositoryImpl } from '@core/infrastructure/repositories/action-repository';
import { z } from 'nestjs-zod/z';

export class ActionsViewUsecase {
  private actionRepository: ActionRepositoryImpl;

  constructor({
    actionRepository,
  }: {
    actionRepository: ActionRepositoryImpl;
  }) {
    this.actionRepository = actionRepository;
  }

  async execute(data: z.infer<typeof ActionsViewSchema>) {
    const action = await this.actionRepository.findOrThrow(data);
    return action;
  }
}
