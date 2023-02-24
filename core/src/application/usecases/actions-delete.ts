import { ActionsDeleteSchema } from '@core/adapter/controllers/dtos/actions.crud.controllers.dto';
import { ActionRepositoryImpl } from '@core/infrastructure/repositories/action-repository';
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
    const action = await this.actionRepository.delete(data.id!);
    return action;
  }
}
