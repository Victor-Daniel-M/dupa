import { ResourceRepositoryImpl } from '@core/infrastructure/repositories/resources-repository';
import { ResourcesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/resources.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ResourcesDeleteUsecase {
  private resourceRepository: ResourceRepositoryImpl;

  constructor({
    resourceRepository,
  }: {
    resourceRepository: ResourceRepositoryImpl;
  }) {
    this.resourceRepository = resourceRepository;
  }

  async execute(data: z.infer<typeof ResourcesDeleteSchema>) {
    // @ts-ignore
    const resource = await this.resourceRepository.delete(data.id!);
    return resource;
  }
}