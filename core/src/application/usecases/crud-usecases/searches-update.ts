import { SearchRepositoryImpl } from '@core/infrastructure/repositories/searches-repository';
import { SearchesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/searches.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchesUpdateUsecase {
  private searchRepository: SearchRepositoryImpl;

  constructor({
    searchRepository,
  }: {
    searchRepository: SearchRepositoryImpl;
  }) {
    this.searchRepository = searchRepository;
  }

  async execute(data: z.infer<typeof SearchesUpdateSchema>) {
    // @ts-ignore
    const search = await this.searchRepository.update(data.id!, data);;
    return search;
  }
}