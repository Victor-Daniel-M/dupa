import { OwnerRegisterDto } from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { DB_TYPES } from '@db/types';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { EmailService } from 'real-estate/src/infrastructure/services/emailService';
import { S3Provider } from 'real-estate/src/infrastructure/services/s3Provider.service';
import { Inject } from '@nestjs/common';
import { BusinessRepositoryImpl } from '@db/infrastructure/repositories/business-repository';
import { UserBusinessRepositoryImpl } from '@db/infrastructure/repositories/user-business-repository';

export class OwnerRegisterUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepository: OfferingRepositoryImpl,
    @Inject(DB_TYPES.repositories.BusinessRepositoryImpl)
    private businessRepository: BusinessRepositoryImpl,
    @Inject(DB_TYPES.repositories.UserBusinessRepositoryImpl)
    private userBusinessRepository: UserBusinessRepositoryImpl,
    @Inject(REAL_ESTATE_TYPES.services.EmailService)
    private emailService: EmailService,
    @Inject(REAL_ESTATE_TYPES.services.S3Provider)
    private s3Provider: S3Provider,
  ) {}

  async execute(data: {
    body: OwnerRegisterDto;
    files: Express.Multer.File[];
  }) {
    const { body, files } = data;

    const res = await this.s3Provider.upload(files[0]);

    const business = await this.businessRepository.create({
      name: body.businessName,
      type: 'OWNER',
    });

    const createdUser = await this.usersRepository.create({
      phoneNumber: body.phoneNumber,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    });

    const userBusiness = await this.userBusinessRepository.create({
      businessId: business.id!,
      userId: createdUser.id!,
    });

    const offeringOne = data.body.offerings[0];

    const createdOffering = await this.offeringRepository.create({
      cost: Number(offeringOne.cost),
      coverImage: res.Location,
      description: offeringOne.description,
      openDate: offeringOne.openDate,
      title: offeringOne.title,
      offeringCategoryId: Number(offeringOne.offeringCategoryId),
      businessId: business.id!,
    });

    await this.emailService.sendLoginEmail(body.email);

    return {
      user: createdUser,
      offerings: [createdOffering],
      userBusiness,
      business,
    };
  }
}
