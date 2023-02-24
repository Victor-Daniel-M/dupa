import { ResourceActionRepositoryImpl } from '@core/infrastructure/repositories/resource-actions-repository';
import { ResourceActionsGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/resourceActions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourceActionsGetUsecase {
  private resourceActionRepository: ResourceActionRepositoryImpl;

  constructor({
    resourceActionRepository,
  }: {
    resourceActionRepository: ResourceActionRepositoryImpl;
  }) {
    this.resourceActionRepository = resourceActionRepository;
  }

  async execute(data: z.infer<typeof ResourceActionsGetSchema>) {
    // @ts-ignore
    const resourceAction = await this.resourceActionRepository.findAll();
    return resourceAction;
  }
}