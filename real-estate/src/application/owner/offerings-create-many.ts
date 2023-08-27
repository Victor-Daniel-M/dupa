import { DB_TYPES } from '@db/types';
import { REAL_ESTATE_TYPES } from '../../types';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { EmailService } from 'real-estate/src/infrastructure/services/emailService';
import { S3Provider } from 'real-estate/src/infrastructure/services/s3Provider.service';
import { Inject } from '@nestjs/common';
import { Offering } from '@db/domain/entities';
import { OfferingsCreateManyDto } from '@real-estate/adapter/dtos/general.dto';

export class OwnerOfferingsCreateManyUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepository: OfferingRepositoryImpl,
    @Inject(REAL_ESTATE_TYPES.services.S3Provider)
    private s3Provider: S3Provider,
  ) {}

  async execute(data: {
    body: OfferingsCreateManyDto;
    files: Express.Multer.File[];
  }) {
    const { body, files } = data;

    let createdOfferings: Offering[] = [];

    for (let index = 0; index < data.body.offerings.length; index++) {
      const offering = data.body.offerings[index];

      const res = await this.s3Provider.upload(files[index]);

      const createdOffering = await this.offeringRepository.create({
        cost: offering.cost,
        coverImage: res.Location,
        description: offering.description,
        openDate: offering.openDate,
        title: offering.title,
        offeringCategoryId: offering.offeringCategoryId,
        businessId: body.businessId,
      });

      createdOfferings.push(createdOffering);
    }

    return {
      offerings: createdOfferings,
    };
  }
}
