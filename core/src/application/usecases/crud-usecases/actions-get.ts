import { ActionRepositoryImpl } from '@core/infrastructure/repositories/actions-repository';
import { ActionsGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/actions.crud.controllers.dto';
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
    // @ts-ignore
    const action = await this.actionRepository.findAll();
    return action;
  }
}