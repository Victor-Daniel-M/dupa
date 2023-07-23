import { DB_TYPES } from '@db/types';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { EmailService } from 'real-estate/src/infrastructure/services/emailService';
import { S3Provider } from 'real-estate/src/infrastructure/services/s3Provider.service';
import { Inject } from '@nestjs/common';
import { Property } from '@db/domain/entities';
import { PropertiesCreateManyDto } from '@real-estate/adapter/dtos/general.dto';

export class PropertiesCreateManyUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepository: PropertyRepositoryImpl,
    @Inject(REAL_ESTATE_TYPES.services.EmailService)
    private emailService: EmailService,
    @Inject(REAL_ESTATE_TYPES.services.S3Provider)
    private s3Provider: S3Provider,
  ) {}

  async execute(data: {
    body: PropertiesCreateManyDto;
    files: Express.Multer.File[];
  }) {
    const { body, files } = data;

    let createdProperties: Property[] = [];

    for (let index = 0; index < data.body.properties.length; index++) {
      const property = data.body.properties[index];

      const res = await this.s3Provider.upload(files[index]);

      const createdProperty = await this.propertyRepository.create({
        cost: property.cost,
        coverImage: res.Location,
        description: property.description,
        openDate: property.openDate,
        title: property.title,
        propertyCategoryId: property.propertyCategoryId,
      });

      createdProperties.push(createdProperty);
    }

    return {
      properties: createdProperties,
    };
  }
}
