import { SearchMetaRepositoryImpl } from '@core/infrastructure/repositories/search-metas-repository';
import { SearchMetasGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/searchMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchMetasGetUsecase {
  private searchMetaRepository: SearchMetaRepositoryImpl;

  constructor({
    searchMetaRepository,
  }: {
    searchMetaRepository: SearchMetaRepositoryImpl;
  }) {
    this.searchMetaRepository = searchMetaRepository;
  }

  async execute(data: z.infer<typeof SearchMetasGetSchema>) {
    // @ts-ignore
    const searchMeta = await this.searchMetaRepository.findAll();
    return searchMeta;
  }
}