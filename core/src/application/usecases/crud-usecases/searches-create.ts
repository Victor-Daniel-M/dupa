import { SearchRepositoryImpl } from '@core/infrastructure/repositories/searches-repository';
import { SearchesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/searches.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchesCreateUsecase {
  private searchRepository: SearchRepositoryImpl;

  constructor({
    searchRepository,
  }: {
    searchRepository: SearchRepositoryImpl;
  }) {
    this.searchRepository = searchRepository;
  }

  async execute(data: z.infer<typeof SearchesCreateSchema>) {
    // @ts-ignore
    const search = await this.searchRepository.createOrThrow(data, 'id');
    return search;
  }
}