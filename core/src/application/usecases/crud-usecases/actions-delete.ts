import { ActionRepositoryImpl } from '@core/infrastructure/repositories/actions-repository';
import { ActionsDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/actions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ActionsDeleteUsecase {
  private actionRepository: ActionRepositoryImpl;

  constructor({
    actionRepository,
  }: {
    actionRepository: ActionRepositoryImpl;
  }) {
    this.actionRepository = actionRepository;
  }

  async execute(data: z.infer<typeof ActionsDeleteSchema>) {
    // @ts-ignore
    const action = await this.actionRepository.delete(data.id!);
    return action;
  }
}