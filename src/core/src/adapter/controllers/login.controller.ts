import { LoginBrokerViaSystemUsecase } from '../../application/usecases/loginBrokerViaSystem';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { EmailService } from '../../infrastructure/services/emailService';
import { LoginDto } from './dtos/auth.controller.dto';
import { ResponseInterceptor } from '../../../../../common/controller-interceptors/src';
import { RepositoryImpl } from '../../infrastructure/repositories/base-repository';
import { User } from '../../domain/entities/user';

@UseInterceptors(ResponseInterceptor)
@Controller('login')
export class LoginController {
  constructor(
    private emailService: EmailService,
    private repositoryImpl: RepositoryImpl<User>,
  ) {}

  @Post('broker-login')
  async loginBrokerViaSystem(@Body() body: LoginDto): Promise<User> {
    const loginUseCase = new LoginBrokerViaSystemUsecase({
      emailService: this.emailService,
      userRepository: this.repositoryImpl,
    });

    const user = await loginUseCase.execute(body.email, body.password);

    return user;
  }
}
