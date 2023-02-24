import { ActionRepositoryImpl } from '@core/infrastructure/repositories/actions-repository';
import { ActionsViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/actions.crud.controllers.dto';
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
    // @ts-ignore
    const action = await this.actionRepository.findOrThrow(data);
    return action;
  }
}