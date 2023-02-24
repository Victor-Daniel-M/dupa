import { ResourceActionRepositoryImpl } from '@core/infrastructure/repositories/resource-actions-repository';
import { ResourceActionsUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/resourceActions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourceActionsUpdateUsecase {
  private resourceActionRepository: ResourceActionRepositoryImpl;

  constructor({
    resourceActionRepository,
  }: {
    resourceActionRepository: ResourceActionRepositoryImpl;
  }) {
    this.resourceActionRepository = resourceActionRepository;
  }

  async execute(data: z.infer<typeof ResourceActionsUpdateSchema>) {
    // @ts-ignore
    const resourceAction = await this.resourceActionRepository.update(data.id!, data);;
    return resourceAction;
  }
}