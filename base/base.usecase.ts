import { Body, UseInterceptors, Query } from '@nestjs/common';
import { IBaseRepository } from './IBase.repository';
import { BaseEntity } from './base.entity';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { PageDto } from '@common/ddd/dtos';

@UseInterceptors(ResponseInterceptor)
export class BaseUsecase<T extends BaseEntity> {
  constructor(private readonly IBaseService: IBaseRepository<T>) {}

  async getManyPaginatied(@Query() query: any): Promise<PageDto<any>> {
    console.log('query:', query);

    const relationObject = {};
    query?.include?.forEach((item) => {
      relationObject[item] = true;
    });

    return this.IBaseService.getAllPaginated({
      findOptions: {
        relations: relationObject,
      },
    });
  }

  async getOneById(@Query('id') id: number): Promise<{ record: T }> {
    return { record: await this.IBaseService.get(id) };
  }

  async createOne(@Body() entity: T): Promise<{ record: T }> {
    return { record: await this.IBaseService.create(entity) };
  }

  async deleteOneById(@Query('id') id: number) {
    return { record: await this.IBaseService.delete(id) };
  }

  async updateOne(@Body() entity: T): Promise<{ record: T }> {
    return { record: await this.IBaseService.update(entity) };
  }
}
