import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { EmailService } from '../../infrastructure/services/emailService';
import { ResponseInterceptor } from '../../../../common/filters-interceptors/src';
import { UserRepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User } from '../../domain/entities/user';
import { RegisterAsSearcherViaSystemUseCase } from '../../application/usecases/registerAsSearcherViaSystem';
import { RegisterAsSearcherViaSystemDTO } from './dtos/register.controller.dto';
import { z } from 'zod';

@UseInterceptors(ResponseInterceptor)
@Controller('register')
export class RegisterController {
  constructor(
    private emailService: EmailService,
    private repositoryImpl: UserRepositoryImpl,
  ) {}

  @Post('broker-via-system')
  async registerAsSearcherViaSystem(
    @Body() body: RegisterAsSearcherViaSystemDTO,
  ): Promise<User> {
    const registerAsSearcherViaSystemUseCase =
      new RegisterAsSearcherViaSystemUseCase({
        emailService: this.emailService,
        userRepository: this.repositoryImpl,
      });

    const user = await registerAsSearcherViaSystemUseCase.execute(body);

    return user;
  }
}
