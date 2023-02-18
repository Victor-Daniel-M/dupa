import { CString } from '../../domain/value-objects/string';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { Property } from '../../domain/entities/property';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { z } from 'nestjs-zod/z';
import { SearchListingSchema } from 'core/src/adapter/controllers/dtos/listing.controller.dto';

export class SearchListingUseCase {
  private propertyRepository: RepositoryImpl<Property>;

  constructor({
    propertyRepository,
  }: {
    propertyRepository: RepositoryImpl<Property>;
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
