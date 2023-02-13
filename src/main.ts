import { NestFactory } from '@nestjs/core';
import { PinoLoggerService } from 'common/logger/src/adapters/real/pinoLogger.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(PinoLoggerService);
  logger.setContext('main');
  app.useLogger(logger);

  // Starts listening for shutdown hooks
  if (process.env.NODE_ENV !== 'test') {
    app.enableShutdownHooks();
  }

  await app.listen(3000);
}
bootstrap();
