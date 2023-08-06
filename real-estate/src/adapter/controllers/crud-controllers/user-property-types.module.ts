import { Get, Module, Query, UseInterceptors } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Controller } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Application, UserPropertyTypes } from '@db/domain/entities';
import { PageDto } from '@common/ddd/dtos';
import { ResponseInterceptor } from '@common/filters-interceptors/src';

@ApiTags('user-property-types')
@Controller('user-property-types')
@UseInterceptors(ResponseInterceptor)
export class UserPropertyTypesController {
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
      records: UserPropertyTypes.map((type) => {
        return {
          label: type,
          id: type,
          value: type,
        };
      }),
    };
  }
}

@Module({
  imports: [],
  controllers: [UserPropertyTypesController],
})
export class UserPropertyTypesModule {}
