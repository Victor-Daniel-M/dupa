import { RealtorRegisterDto } from '@core/adapter/dtos/realtor.controllers.dto';
import { TYPES } from '@core/domain/types';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { EmailService } from '@core/infrastructure/services/emailService';
import { S3Provider } from '@core/infrastructure/services/s3Provider.service';
import { Inject } from '@nestjs/common';

export class RealtorRegisterUsecase {
  constructor(
    @Inject(TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepository: PropertyRepositoryImpl,
    @Inject(TYPES.services.EmailService)
    private emailService: EmailService,
    @Inject(TYPES.services.S3Provider)
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
