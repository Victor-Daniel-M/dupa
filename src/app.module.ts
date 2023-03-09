import { Module } from '@nestjs/common';
import { CoreModule } from '../core/src/core.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RealtorModule } from './realtor/realtor.module';

@Module({
  providers: [],
  imports: [CoreModule, AuthModule, UsersModule, RealtorModule],
})
export class AppModule {}
