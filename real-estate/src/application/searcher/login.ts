import { SearcherLoginDto } from 'real-estate/src/adapter/dtos/searcher.controllers.dto';
import { DB_TYPES } from '@db/types';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { EmailService } from 'real-estate/src/infrastructure/services/emailService';
import { Inject } from '@nestjs/common';

export class SearcherLoginUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
    @Inject(REAL_ESTATE_TYPES.services.EmailService)
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
