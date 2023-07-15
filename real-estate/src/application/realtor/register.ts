import { RealtorRegisterDto } from 'real-estate/src/adapter/dtos/realtor.controllers.dto';
import { DB_TYPES } from '@db/types';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { EmailService } from 'real-estate/src/infrastructure/services/emailService';
import { S3Provider } from 'real-estate/src/infrastructure/services/s3Provider.service';
import { Inject } from '@nestjs/common';

export class RealtorRegisterUsecase {
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
    body: RealtorRegisterDto;
    files: Express.Multer.File[];
  }) {
    const { body, files } = data;

    const res = await this.s3Provider.upload(files[0]);

    const createdUser = await this.usersRepository.create({
      phoneNumber: body.phoneNumber,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    });

    const propertyOne = data.body.properties[0];

    const createdProperty = await this.propertyRepository.create({
      cost: propertyOne.cost,
      coverImage: res.Location,
      description: propertyOne.description,
      openDate: propertyOne.openDate,
      title: propertyOne.title,
      propertyCategoryId: propertyOne.propertyCategoryId,
    });

    await this.emailService.sendLoginEmail('test@email.com');

    return {
      user: createdUser,
      properties: [createdProperty],
    };
  }
}
