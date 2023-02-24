import { ResourceRepositoryImpl } from '@core/infrastructure/repositories/resources-repository';
import { ResourcesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/resources.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourcesViewUsecase {
  private resourceRepository: ResourceRepositoryImpl;

  constructor({
    resourceRepository,
  }: {
    resourceRepository: ResourceRepositoryImpl;
  }) {
    this.resourceRepository = resourceRepository;
  }

  async execute(data: z.infer<typeof ResourcesViewSchema>) {
    // @ts-ignore
    const resource = await this.resourceRepository.findOrThrow(data);
    return resource;
  }
}