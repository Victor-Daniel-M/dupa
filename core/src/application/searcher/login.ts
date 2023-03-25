import { SearcherLoginDto } from '@core/adapter/dtos/searcher.controllers.dto';
import { TYPES } from '@core/domain/types';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { EmailService } from '@core/infrastructure/services/emailService';
import { Inject } from '@nestjs/common';

export class SearcherLoginUsecase {
  constructor(
    @Inject(TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(TYPES.services.EmailService)
    private emailService: EmailService,
  ) {}

  async execute(data: { body: SearcherLoginDto }) {
    const { body } = data;

    const userByEmail = await this.usersRepository.getBy({
      key: 'email',
      value: body.email,
    });

    await this.emailService.sendLoginEmail('test@email.com');

    return {
      user: userByEmail,
    };
  }
}
