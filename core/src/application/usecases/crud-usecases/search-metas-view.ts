import { SearchMetaRepositoryImpl } from '@core/infrastructure/repositories/search-metas-repository';
import { SearchMetasViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/searchMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchMetasViewUsecase {
  private searchMetaRepository: SearchMetaRepositoryImpl;

  constructor({
    searchMetaRepository,
  }: {
    searchMetaRepository: SearchMetaRepositoryImpl;
  }) {
    this.searchMetaRepository = searchMetaRepository;
  }

  async execute(data: z.infer<typeof SearchMetasViewSchema>) {
    // @ts-ignore
    const searchMeta = await this.searchMetaRepository.findOrThrow(data);
    return searchMeta;
  }
}