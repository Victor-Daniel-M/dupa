import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '../../../../common/filters-interceptors/src';
import { SearchListingDTO } from './dtos/listing.controller.dto';
import { SearchListingUseCase } from '../../application/usecases/searchListings';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/property-repository';

@UseInterceptors(ResponseInterceptor)
@Controller('search')
export class SearchController {
  constructor(private repositoryImpl: PropertyRepositoryImpl) {}

  @Post('listing')
  async searchListing(@Body() body: SearchListingDTO) {
    const useCase = new SearchListingUseCase({
      propertyRepository: this.repositoryImpl,
    });

    const res = await useCase.execute(body);

    return res;
  }
}
