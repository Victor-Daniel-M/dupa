import { Property } from '../../domain/entities/property';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { z } from 'nestjs-zod/z';
import { SearchListingSchema } from 'core/src/adapter/controllers/dtos/listing.controller.dto';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';

export class SearchListingUseCase {
  private propertyRepository: PropertyRepositoryImpl;

  constructor({
    propertyRepository,
  }: {
    propertyRepository: PropertyRepositoryImpl;
  }) {
    this.propertyRepository = propertyRepository;
  }

  async execute(
    data: z.infer<typeof SearchListingSchema>,
  ): Promise<Property[]> {
    const res = await this.propertyRepository.search({
      openDate: data.openDate,
    });

    return res;
  }
}
