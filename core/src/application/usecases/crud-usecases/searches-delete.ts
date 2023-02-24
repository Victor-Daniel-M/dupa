import { SearchRepositoryImpl } from '@core/infrastructure/repositories/searches-repository';
import { SearchesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/searches.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchesDeleteUsecase {
  private searchRepository: SearchRepositoryImpl;

  constructor({
    searchRepository,
  }: {
    searchRepository: SearchRepositoryImpl;
  }) {
    this.searchRepository = searchRepository;
  }

  async execute(data: z.infer<typeof SearchesDeleteSchema>) {
    // @ts-ignore
    const search = await this.searchRepository.delete(data.id!);
    return search;
  }
}