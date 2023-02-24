import { SearchRepositoryImpl } from '@core/infrastructure/repositories/searches-repository';
import { SearchesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/searches.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchesViewUsecase {
  private searchRepository: SearchRepositoryImpl;

  constructor({
    searchRepository,
  }: {
    searchRepository: SearchRepositoryImpl;
  }) {
    this.searchRepository = searchRepository;
  }

  async execute(data: z.infer<typeof SearchesViewSchema>) {
    // @ts-ignore
    const search = await this.searchRepository.findOrThrow(data);
    return search;
  }
}