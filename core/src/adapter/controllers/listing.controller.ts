import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '../../../../common/filters-interceptors/src';
import { RecordListingByBrokerUseCase } from '../../application/usecases/recordListingByBroker';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { RecordListingByBrokerDTO } from './dtos/listing.controller.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('listings')
export class ListingController {
  constructor(
    private notificationService: NotificationService,
    private repositoryImpl: PropertyRepositoryImpl,
  ) {}

  @Post('record')
  async recordListing(@Body() body: RecordListingByBrokerDTO) {
    const recordListingByBrokerUseCase = new RecordListingByBrokerUseCase({
      notificationService: this.notificationService,
      propertyRepository: this.repositoryImpl,
    });

    const res = await recordListingByBrokerUseCase.execute(body);

    return res;
  }
}
