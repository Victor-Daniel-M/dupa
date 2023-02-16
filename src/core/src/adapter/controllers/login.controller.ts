import { LoginBrokerViaSystemUsecase } from '../../application/usecases/loginBrokerViaSystem';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { EmailService } from '../../infrastructure/services/emailService';
import { NotificationService } from '../../infrastructure/services/notificationService';
import { UserRepositoryImpl } from '../../infrastructure/repositories/userRepository';
import { LoginDto } from './dtos/authController.dto';
import { ResponseInterceptor } from '../../../../../common/controller-interceptors/src';

@UseInterceptors(ResponseInterceptor)
@Controller('auth')
export class AuthController {
  constructor(
    private emailService: EmailService,
    private notificationService: NotificationService,
    private userRepositoryImpl: UserRepositoryImpl,
  ) {}

  @Post('login')
  async loginBrokerViaSystem(@Body() body: LoginDto): Promise<void> {
    const loginUseCase = new LoginBrokerViaSystemUsecase({
      emailService: this.emailService,
      userRepository: this.userRepositoryImpl,
    });

    // @ts-ignore
    const user = await loginUseCase.execute(body.email, body.password);

    // @ts-ignore
    return user;
  }
}
