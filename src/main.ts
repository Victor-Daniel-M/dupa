import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { PinoLoggerService } from 'common/logger/src/adapters/real/pinoLogger.service';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AllExceptionsFilter } from 'common/filters-interceptors/src';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  // // const logger = app.get(PinoLoggerService);
  // logger.setContext('main');
  // app.useLogger(logger);

  const config = new DocumentBuilder()
    .setTitle('Dupa app')
    .setDescription('The dupa app API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Starts listening for shutdown hooks
  if (process.env.NODE_ENV !== 'test') {
    app.enableShutdownHooks();
  }

  await app.listen(3000);
}
bootstrap();
