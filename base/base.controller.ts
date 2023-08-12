import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { IBaseRepository } from './IBase.repository';
import { BaseEntity } from './base.entity';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { PageDto } from '@common/ddd/dtos';

@UseInterceptors(ResponseInterceptor)
export class BaseController<T extends BaseEntity> {
  constructor(private readonly IBaseService: IBaseRepository<T>) {}

  @Get('paginated')
  @ApiResponse({ status: 200, description: 'Ok' })
  async paginatied(@Query() query: any): Promise<PageDto<any>> {
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

  @Get('get-one')
  @ApiResponse({ status: 200, description: 'Entity retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async findById(@Query('id') id: number): Promise<{ record: T }> {
    return { record: await this.IBaseService.get(id) };
  }

  @Post('create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() entity: T): Promise<{ record: T }> {
    return { record: await this.IBaseService.create(entity) };
  }

  @Delete('delete')
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async delete(@Query('id') id: number) {
    return { record: await this.IBaseService.delete(id) };
  }

  @Put('update')
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  async update(@Body() entity: T): Promise<{ record: T }> {
    return { record: await this.IBaseService.update(entity) };
  }
}
