import { LoginUserUseCase } from '../../application/usecases/loginUser';
import { ProjectDeps } from '../../config/projectDependencies';
import { User } from '../../domain/entities/user';
import { Request, Response } from 'express';
import { z } from 'zod';
import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { EmailService } from '@core/infrastructure/services/emailService';
import { NotificationService } from '@core/infrastructure/services/notificationService';
import { UserRepositoryImpl } from '@core/infrastructure/repositories/userRepository';
import { LoginDto } from './dtos/authController.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private emailService: EmailService,
    private notificationService: NotificationService,
    private userRepositoryImpl: UserRepositoryImpl,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDto, @Res() res: Response): Promise<void> {
    console.log('Logging in...');

    const loginUseCase = new LoginUserUseCase({
      emailService: this.emailService,
      notificationService: this.notificationService,
      userRepository: this.userRepositoryImpl,
    });

    // @ts-ignore
    const user = await loginUseCase.execute(body.email, body.password);

    console.log('user:', user);

    // @ts-ignore
    res.send(user);
  }
}
