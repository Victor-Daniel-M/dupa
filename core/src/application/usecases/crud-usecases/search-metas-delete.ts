import { SearchMetaRepositoryImpl } from '@core/infrastructure/repositories/search-metas-repository';
import { SearchMetasDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/searchMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchMetasDeleteUsecase {
  private searchMetaRepository: SearchMetaRepositoryImpl;

  constructor({
    searchMetaRepository,
  }: {
    searchMetaRepository: SearchMetaRepositoryImpl;
  }) {
    this.searchMetaRepository = searchMetaRepository;
  }

  async execute(data: z.infer<typeof SearchMetasDeleteSchema>) {
    // @ts-ignore
    const searchMeta = await this.searchMetaRepository.delete(data.id!);
    return searchMeta;
  }
}