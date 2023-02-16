import { LoginBrokerViaSystemUsecase } from '../../application/usecases/loginBrokerViaSystem';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { EmailService } from '../../infrastructure/services/emailService';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { LoginDto } from './dtos/auth.controller.dto';
import { ResponseInterceptor } from '../../../../../common/controller-interceptors/src';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User } from '../../domain/entities/user';
import { RegisterAsSearcherViaSystemUseCase } from '../../application/usecases/registerAsSearcherViaSystem';
import {
  RegisterAsSearcherViaSystem,
  RegisterAsSearcherViaSystemDTO,
} from './dtos/register.controller.dto';
import { z } from 'zod';

@UseInterceptors(ResponseInterceptor)
@Controller('register')
export class RegisterController {
  constructor(
    private emailService: EmailService,
    private notificationService: NotificationService,
    private repositoryImpl: RepositoryImpl<User>,
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
