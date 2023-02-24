import { Property } from '../../domain/entities/property';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { z } from 'nestjs-zod/z';
import { RecordListingByBrokerSchema } from 'core/src/adapter/controllers/dtos/listing.controller.dto';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';

export class RecordListingByBrokerUseCase {
  private propertyRepository: PropertyRepositoryImpl;
  private notificationService: NotificationService;

  constructor({
    propertyRepository,
    notificationService,
  }: {
    propertyRepository: PropertyRepositoryImpl;
    notificationService: NotificationService;
  }) {
    this.notificationService = notificationService;
    this.propertyRepository = propertyRepository;
  }

  async execute(
    data: z.infer<typeof RecordListingByBrokerSchema>,
  ): Promise<Property> {
    const coverImageValueObj = data.coverImage;
    const idValueObj = data.id;
    const propertyCategoryIdValueObj = data.propertyCategoryId;
    const openDateValueObj = data.openDate;
    const costValueObj = data.cost;
    const descriptionValueObj = data.description;
    const titleValueObj = data.title;
    const createdAtValueObj = data.createdAt;
    const updatedAtValueObj = data.updatedAt;

    const res = await this.propertyRepository.createOrThrow(
      {
        coverImage: coverImageValueObj,
        createdAt: createdAtValueObj,
        updatedAt: updatedAtValueObj,
        openDate: openDateValueObj,
        id: idValueObj,
        propertyCategoryId: propertyCategoryIdValueObj,
        cost: costValueObj,
        description: descriptionValueObj,
        title: titleValueObj,
      },
      'id',
    );

    // const res = await this.propertyRepository.createOrThrow(
    //   {
    //     coverImage: coverImageValueObj,
    //     createdAt: createdAtValueObj,
    //     updatedAt: updatedAtValueObj,
    //     openDate: openDateValueObj,
    //     id: idValueObj,
    //     propertyCategoryId: propertyCategoryIdValueObj,
    //     cost: costValueObj,
    //     description: descriptionValueObj,
    //     title: titleValueObj,
    //   },
    //   'id',
    // );

    this.notificationService.sendNotification();

    return res;
  }
}
