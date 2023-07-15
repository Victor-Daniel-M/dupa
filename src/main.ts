import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from './common/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000, process.env.HOST!);
  await app.listen(3000, '192.168.43.44');
}
bootstrap();
