import { SearchRepositoryImpl } from '@core/infrastructure/repositories/searches-repository';
import { SearchesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/searches.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchesGetUsecase {
  private searchRepository: SearchRepositoryImpl;

  constructor({
    searchRepository,
  }: {
    searchRepository: SearchRepositoryImpl;
  }) {
    this.searchRepository = searchRepository;
  }

  async execute(data: z.infer<typeof SearchesGetSchema>) {
    // @ts-ignore
    const search = await this.searchRepository.findAll();
    return search;
  }
}