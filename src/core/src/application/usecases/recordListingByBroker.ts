import { CString } from '../../domain/value-objects/string';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User, UserType } from '../../domain/entities/user';
import { Property } from '../../domain/entities/property';
import { NotificationService } from '../../infrastructure/services/notificationService';

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

  async execute({
    coverImage,
    createdAt,
    openDate,
    updatedAt,
    id,
    propertyCategoryId,
  }: {
    coverImage: string;
    openDate: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    propertyCategoryId: string;
  }): Promise<Property> {
    const coverImageValueObj = new CString(coverImage);
    const idValueObj = new CString(id);
    const propertyCategoryIdValueObj = new CString(propertyCategoryId);
    const openDateValueObj = new CString(openDate);
    const createdAtValueObj = new CString(createdAt);
    const updatedAtValueObj = new CString(updatedAt);

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
