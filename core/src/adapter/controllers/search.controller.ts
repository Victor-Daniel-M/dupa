import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '../../../../common/filters-interceptors/src';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { Property } from '../../domain/entities/property';
import { SearchListingDTO } from './dtos/listing.controller.dto';
import { SearchListingUseCase } from '../../application/usecases/searchListings';

@UseInterceptors(ResponseInterceptor)
@Controller('search')
export class SearchController {
  constructor(private repositoryImpl: RepositoryImpl<Property>) {}

  @Post('listing')
  async searchListing(@Body() body: SearchListingDTO) {
    const useCase = new SearchListingUseCase({
      propertyRepository: this.repositoryImpl,
    });

    const res = await useCase.execute(body);

    return res;
  }
}
