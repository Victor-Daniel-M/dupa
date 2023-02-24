import { ResourceActionRepositoryImpl } from '@core/infrastructure/repositories/resource-actions-repository';
import { ResourceActionsViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/resourceActions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourceActionsViewUsecase {
  private resourceActionRepository: ResourceActionRepositoryImpl;

  constructor({
    resourceActionRepository,
  }: {
    resourceActionRepository: ResourceActionRepositoryImpl;
  }) {
    this.resourceActionRepository = resourceActionRepository;
  }

  async execute(data: z.infer<typeof ResourceActionsViewSchema>) {
    // @ts-ignore
    const resourceAction = await this.resourceActionRepository.findOrThrow(data);
    return resourceAction;
  }
}