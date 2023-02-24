import { ResourceRepositoryImpl } from '@core/infrastructure/repositories/resources-repository';
import { ResourcesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/resources.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourcesCreateUsecase {
  private resourceRepository: ResourceRepositoryImpl;

  constructor({
    resourceRepository,
  }: {
    resourceRepository: ResourceRepositoryImpl;
  }) {
    this.resourceRepository = resourceRepository;
  }

  async execute(data: z.infer<typeof ResourcesCreateSchema>) {
    // @ts-ignore
    const resource = await this.resourceRepository.createOrThrow(data, 'id');
    return resource;
  }
}