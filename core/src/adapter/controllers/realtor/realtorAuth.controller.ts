import { RealtorRegisterReqDto } from '@core/adapter/dtos/realtor/auth.controller.dto';
import { RealtorsAuthRegisterUsecase } from '@core/application/usecases/realtor/auth-register';
import { UsersRepositoryImpl } from '@core/infrastructure/repositories/usersRepository';
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';

@Controller('realtor/auth')
export class RealtorAuthController {
  constructor(private usersRepositoryImpl: UsersRepositoryImpl) {}

  @Post('register')
  async register(@Body() body: RealtorRegisterReqDto) {
    const realtorsAuthRegisterUsecase = new RealtorsAuthRegisterUsecase({
      usersRepositoryImpl: this.usersRepositoryImpl,
    });

    realtorsAuthRegisterUsecase.execute(body);
    return;
  }
}
