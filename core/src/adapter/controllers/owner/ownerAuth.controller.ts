import { OwnerRegisterReqDto } from '@core/adapter/dtos/owner/auth.controller.dto';
import { RegisterUsecase } from '@core/application/usecases/owner/register';
import { UsersRepositoryImpl } from '@core/infrastructure/repositories/usersRepository';
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';

@Controller('owner/auth')
export class OwnerAuthController {
  constructor(private usersRepositoryImpl: UsersRepositoryImpl) {}

  @Post('register')
  async register(@Body() body: OwnerRegisterReqDto) {
    const registerUsecase = new RegisterUsecase({
      userRepositoryImp: this.usersRepositoryImpl,
    });

    registerUsecase.execute(body);
    return;
  }
}
