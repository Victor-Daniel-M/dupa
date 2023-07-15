import { SearcherRegisterDto } from 'real-estate/src/adapter/dtos/searcher.controllers.dto';
import { DB_TYPES } from '@db/types';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { EmailService } from 'real-estate/src/infrastructure/services/emailService';
import { Inject } from '@nestjs/common';

export class SearcherRegisterUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(REAL_ESTATE_TYPES.services.EmailService)
    private emailService: EmailService,
  ) {}

  async execute(data: { body: SearcherRegisterDto }) {
    const { body } = data;

    const createdUser = await this.usersRepository.create({
      phoneNumber: body.phoneNumber,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    });

    await this.emailService.sendLoginEmail('test@email.com');

    return {
      user: createdUser,
    };
  }
}
