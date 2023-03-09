import { OwnerRegisterReqDto } from '@core/adapter/dtos/owner/auth.controller.dto';
import { RegisterUsecase } from '@core/application/usecases/owner/register';
import { UsersRepositoryImpl } from '@core/infrastructure/repositories/usersRepository';
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Inject } from '@nestjs/common';

@Controller('owner/auth')
export class OwnerAuthController {
  constructor(
    @Inject('RegisterUsecase') private registerUsecase: RegisterUsecase,
  ) {}

  @Post('register')
  async register(@Body() body: OwnerRegisterReqDto) {
    const registerUsecase = this.registerUsecase.execute(body);
    return;
  }
}
