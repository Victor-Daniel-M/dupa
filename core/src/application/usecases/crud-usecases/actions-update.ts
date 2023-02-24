import { ActionRepositoryImpl } from '@core/infrastructure/repositories/actions-repository';
import { ActionsUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/actions.crud.controllers.dto';
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
    // @ts-ignore
    const action = await this.actionRepository.update(data.id!, data);;
    return action;
  }
}