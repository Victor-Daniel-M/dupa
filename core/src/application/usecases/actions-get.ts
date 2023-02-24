import { ActionsGetSchema } from '@core/adapter/controllers/dtos/actions.crud.controllers.dto';
import { ActionRepositoryImpl } from '@core/infrastructure/repositories/action-repository';
import { z } from 'nestjs-zod/z';

export class ActionsGetUsecase {
  private actionRepository: ActionRepositoryImpl;

  constructor({
    actionRepository,
  }: {
    actionRepository: ActionRepositoryImpl;
  }) {
    this.actionRepository = actionRepository;
  }

  async execute(data: z.infer<typeof ActionsGetSchema>) {
    const action = await this.actionRepository.findAll();
    return action;
  }
}
