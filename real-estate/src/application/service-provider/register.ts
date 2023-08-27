import { BusinessRepositoryImpl } from '@db/infrastructure/repositories/business-repository';
import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { UserBusinessRepositoryImpl } from '@db/infrastructure/repositories/user-business-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  ServiceProviderRegisterReqBodyDto,
  ServiceProviderRegisterReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';
import { EmailService } from '@real-estate/infrastructure/services/emailService';
import { S3Provider } from '@real-estate/infrastructure/services/s3Provider.service';
import { REAL_ESTATE_TYPES } from '@real-estate/types';

type ExecuteInput = {
  body: ServiceProviderRegisterReqBodyDto;
  query: ServiceProviderRegisterReqQueryDto;
  files: Express.Multer.File[];
};

export class ServiceProviderRegisterUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepository: PropertyRepositoryImpl,
    @Inject(DB_TYPES.repositories.BusinessRepositoryImpl)
    private businessRepository: BusinessRepositoryImpl,
    @Inject(DB_TYPES.repositories.UserBusinessRepositoryImpl)
    private userBusinessRepository: UserBusinessRepositoryImpl,
    @Inject(REAL_ESTATE_TYPES.services.EmailService)
    private emailService: EmailService,
    @Inject(REAL_ESTATE_TYPES.services.S3Provider)
    private s3Provider: S3Provider,
  ) {}

  async execute(data: ExecuteInput) {
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

    const propertyOne = data.body.offerings[0];

    const createdProperty = await this.propertyRepository.create({
      cost: Number(propertyOne.cost),
      coverImage: res.Location,
      description: propertyOne.description,
      openDate: propertyOne.openDate,
      title: propertyOne.title,
      propertyCategoryId: Number(propertyOne.propertyCategoryId),
      businessId: business.id!,
    });

    await this.emailService.sendLoginEmail(body.email);

    return {
      user: createdUser,
      properties: [createdProperty],
      userBusiness,
      business,
    };

    return {};
  }
}
