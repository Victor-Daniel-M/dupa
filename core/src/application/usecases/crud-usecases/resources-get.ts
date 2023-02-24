import { ResourceRepositoryImpl } from '@core/infrastructure/repositories/resources-repository';
import { ResourcesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/resources.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourcesGetUsecase {
  private resourceRepository: ResourceRepositoryImpl;

  constructor({
    resourceRepository,
  }: {
    resourceRepository: ResourceRepositoryImpl;
  }) {
    this.resourceRepository = resourceRepository;
  }

  async execute(data: z.infer<typeof ResourcesGetSchema>) {
    // @ts-ignore
    const resource = await this.resourceRepository.findAll();
    return resource;
  }
}