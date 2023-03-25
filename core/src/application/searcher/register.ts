import { SearcherRegisterDto } from '@core/adapter/dtos/searcher.controllers.dto';
import { TYPES } from '@core/domain/types';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { EmailService } from '@core/infrastructure/services/emailService';
import { Inject } from '@nestjs/common';

export class SearcherRegisterUsecase {
  constructor(
    @Inject(TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(TYPES.services.EmailService)
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
