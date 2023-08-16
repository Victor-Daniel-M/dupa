import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CONSTANTS } from '@common/constants';
// import { ValidationPipe } from './common/validation.pipe';

console.log('CONSTANTS.NODE_ENV:', CONSTANTS.NODE_ENV);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000, process.env.HOST!);
  if (CONSTANTS.NODE_ENV == 'development') {
    await app.listen(5001);
  } else {
    await app.listen(5000);
  }
}
bootstrap();
