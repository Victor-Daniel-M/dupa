import { LoginBrokerViaSystemUsecase } from '../../application/usecases/loginBrokerViaSystem';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { EmailService } from '../../infrastructure/services/emailService';
import { LoginDto } from './dtos/auth.controller.dto';
import { ResponseInterceptor } from '../../../../common/filters-interceptors/src';
import { User } from '../../domain/entities/user';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/user-repository';

@UseInterceptors(ResponseInterceptor)
@Controller('login')
export class LoginController {
  constructor(
    private emailService: EmailService,
    private userRepository: UserRepositoryImpl,
  ) {}

  @Post('broker-login')
  async loginBrokerViaSystem(@Body() body: LoginDto): Promise<User> {
    const loginUseCase = new LoginBrokerViaSystemUsecase({
      emailService: this.emailService,
      userRepository: this.userRepository,
    });

    const user = await loginUseCase.execute(body.email, body.password);

    return user;
  }
}
