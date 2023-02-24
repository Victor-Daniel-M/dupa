import { SearchMetaRepositoryImpl } from '@core/infrastructure/repositories/search-metas-repository';
import { SearchMetasCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/searchMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SearchMetasCreateUsecase {
  private searchMetaRepository: SearchMetaRepositoryImpl;

  constructor({
    searchMetaRepository,
  }: {
    searchMetaRepository: SearchMetaRepositoryImpl;
  }) {
    this.searchMetaRepository = searchMetaRepository;
  }

  async execute(data: z.infer<typeof SearchMetasCreateSchema>) {
    // @ts-ignore
    const searchMeta = await this.searchMetaRepository.createOrThrow(data, 'id');
    return searchMeta;
  }
}