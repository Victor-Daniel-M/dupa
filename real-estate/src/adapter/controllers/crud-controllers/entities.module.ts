import { Get, Module, Query, UseInterceptors } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PageDto } from '@common/ddd/dtos';
import { ResponseInterceptor } from '@common/filters-interceptors/src';

@ApiTags('entities')
@Controller('entities')
@UseInterceptors(ResponseInterceptor)
export class EntityController {
  @Get('paginated')
  @ApiResponse({ status: 200, description: 'Ok' })
  async paginatied(@Query() query: any): Promise<PageDto<any>> {
    return {
      paginationMeta: {
        hasNextPage: false,
        hasPreviousPage: false,
        itemCount: 10,
        page: 1,
        pageCount: 1,
        take: 10,
      },
      records: [
        {
          label: 'USERS',
          id: 'users',
          value: 'users',
        },
        {
          label: 'USER PROPERTIES',
          id: 'user-properties',
          value: 'user-properties',
        },
        {
          label: 'PROPERTIES',
          id: 'properties',
          value: 'properties',
        },
      ],
    };
  }
}

@Module({
  imports: [],
  controllers: [EntityController],
})
export class EntityModule {}
