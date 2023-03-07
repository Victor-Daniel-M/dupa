import { Module } from '@nestjs/common';
import { CoreModule } from '../core/src/core.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  providers: [],
  imports: [CoreModule],
})
export class AppModule {}
