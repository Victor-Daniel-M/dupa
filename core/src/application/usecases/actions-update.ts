import { ActionsUpdateSchema } from '@core/adapter/controllers/dtos/actions.crud.controllers.dto';
import { ActionRepositoryImpl } from '@core/infrastructure/repositories/action-repository';
import { z } from 'nestjs-zod/z';

export class ActionsUpdateUsecase {
  private actionRepository: ActionRepositoryImpl;

  constructor({
    actionRepository,
  }: {
    actionRepository: ActionRepositoryImpl;
  }) {
    this.actionRepository = actionRepository;
  }

  async execute(data: z.infer<typeof ActionsUpdateSchema>) {
    const action = await this.actionRepository.update(data.id!, data);
    return action;
  }
}
