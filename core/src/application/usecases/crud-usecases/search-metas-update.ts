import { SearchMetaRepositoryImpl } from '@core/infrastructure/repositories/search-metas-repository';
import { SearchMetasUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/searchMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchMetasUpdateUsecase {
  private searchMetaRepository: SearchMetaRepositoryImpl;

  constructor({
    searchMetaRepository,
  }: {
    searchMetaRepository: SearchMetaRepositoryImpl;
  }) {
    this.searchMetaRepository = searchMetaRepository;
  }

  async execute(data: z.infer<typeof SearchMetasUpdateSchema>) {
    // @ts-ignore
    const searchMeta = await this.searchMetaRepository.update(data.id!, data);;
    return searchMeta;
  }
}