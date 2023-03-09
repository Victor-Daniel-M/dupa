import { Module } from '@nestjs/common';
import { CoreModule } from '../core/src/core.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  providers: [],
  imports: [CoreModule, AuthModule, UsersModule],
})
export class AppModule {}
