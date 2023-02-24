import { ActionsCreateSchema } from '@core/adapter/controllers/dtos/actions.crud.controllers.dto';
import { ActionRepositoryImpl } from '@core/infrastructure/repositories/action-repository';
import { z } from 'nestjs-zod/z';

export class ActionsCreateUsecase {
  private actionRepository: ActionRepositoryImpl;

  constructor({
    actionRepository,
  }: {
    actionRepository: ActionRepositoryImpl;
  }) {
    this.actionRepository = actionRepository;
  }

  async execute(data: z.infer<typeof ActionsCreateSchema>) {
    const action = await this.actionRepository.createOrThrow(data, 'id');
    return action;
  }
}
