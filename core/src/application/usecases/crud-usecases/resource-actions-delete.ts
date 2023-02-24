import { ResourceActionRepositoryImpl } from '@core/infrastructure/repositories/resource-actions-repository';
import { ResourceActionsDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/resourceActions.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourceActionsDeleteUsecase {
  private resourceActionRepository: ResourceActionRepositoryImpl;

  constructor({
    resourceActionRepository,
  }: {
    resourceActionRepository: ResourceActionRepositoryImpl;
  }) {
    this.resourceActionRepository = resourceActionRepository;
  }

  async execute(data: z.infer<typeof ResourceActionsDeleteSchema>) {
    // @ts-ignore
    const resourceAction = await this.resourceActionRepository.delete(data.id!);
    return resourceAction;
  }
}