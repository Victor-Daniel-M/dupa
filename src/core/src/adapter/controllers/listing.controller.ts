import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '../../../../../common/controller-interceptors/src';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { RecordListingByBrokerUseCase } from '../../application/usecases/recordListingByBroker';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { Property } from '../../domain/entities/property';
import { RecordListingByBrokerDTO } from './dtos/listing.controller.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('listings')
export class ListingController {
  constructor(
    private notificationService: NotificationService,
    private repositoryImpl: RepositoryImpl<Property>,
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
