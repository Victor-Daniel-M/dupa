import { CString } from '../../domain/value-objects/string';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { Property } from '../../domain/entities/property';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { z } from 'nestjs-zod/z';
import { RecordListingByBrokerSchema } from '@core/adapter/controllers/dtos/listing.controller.dto';

export class RecordListingByBrokerUseCase {
  private propertyRepository: RepositoryImpl<Property>;
  private notificationService: NotificationService;

  constructor({
    propertyRepository,
    notificationService,
  }: {
    propertyRepository: RepositoryImpl<Property>;
    notificationService: NotificationService;
  }) {
    this.notificationService = notificationService;
    this.propertyRepository = propertyRepository;
  }

  async execute(
    data: z.infer<typeof RecordListingByBrokerSchema>,
  ): Promise<Property> {
    const coverImageValueObj = new CString(data.coverImage);
    const idValueObj = new CString(data.id);
    const propertyCategoryIdValueObj = new CString(data.propertyCategoryId);
    const openDateValueObj = new CString(data.openDate);
    const createdAtValueObj = new CString(data.createdAt);
    const updatedAtValueObj = new CString(data.updatedAt);

    const res = await this.propertyRepository.createOrThrow(
      {
        coverImage: coverImageValueObj,
        createdAt: createdAtValueObj,
        updatedAt: updatedAtValueObj,
        openDate: openDateValueObj,
        id: idValueObj,
        propertyCategoryId: propertyCategoryIdValueObj,
      },
      'id',
    );

    this.notificationService.sendNotification();

    return res;
  }
}
