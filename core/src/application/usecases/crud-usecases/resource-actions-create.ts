import { ResourceActionRepositoryImpl } from '@core/infrastructure/repositories/resource-actions-repository';
import { ResourceActionsCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/resourceActions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourceActionsCreateUsecase {
  private resourceActionRepository: ResourceActionRepositoryImpl;

  constructor({
    resourceActionRepository,
  }: {
    resourceActionRepository: ResourceActionRepositoryImpl;
  }) {
    this.resourceActionRepository = resourceActionRepository;
  }

  async execute(data: z.infer<typeof ResourceActionsCreateSchema>) {
    // @ts-ignore
    const resourceAction = await this.resourceActionRepository.createOrThrow(data, 'id');
    return resourceAction;
  }
}