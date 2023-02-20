import { LoginBrokerViaSystemUsecase } from '../../application/usecases/loginBrokerViaSystem';
import {
  Body,
  Controller,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { EmailService } from '../../infrastructure/services/emailService';
import { LoginDto } from './dtos/auth.controller.dto';
import {
  AllExceptionsFilter,
  ResponseInterceptor,
} from '../../../../common/filters-interceptors/src';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/base-repository';
import { User } from '../../domain/entities/user';

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
