import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { BaseController } from 'base/base.controller';
import { User } from '@core/domain/entities/user';

@ApiTags('users')
@Controller('users')
export class UserController extends BaseController<User> {
  constructor(private readonly usersRepository: UserRepositoryImpl) {
    super(usersRepository);
  }
}
