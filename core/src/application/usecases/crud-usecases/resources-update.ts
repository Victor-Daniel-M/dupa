import { ResourceRepositoryImpl } from '@core/infrastructure/repositories/resources-repository';
import { ResourcesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/resources.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourcesUpdateUsecase {
  private resourceRepository: ResourceRepositoryImpl;

  constructor({
    resourceRepository,
  }: {
    resourceRepository: ResourceRepositoryImpl;
  }) {
    this.resourceRepository = resourceRepository;
  }

  async execute(data: z.infer<typeof ResourcesUpdateSchema>) {
    // @ts-ignore
    const resource = await this.resourceRepository.update(data.id!, data);;
    return resource;
  }
}