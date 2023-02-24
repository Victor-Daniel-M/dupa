import { ActionRepositoryImpl } from '@core/infrastructure/repositories/actions-repository';
import { ActionsCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/actions.crud.controllers.dto';
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
    // @ts-ignore
    const action = await this.actionRepository.createOrThrow(data, 'id');
    return action;
  }
}