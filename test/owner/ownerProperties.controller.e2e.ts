import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { z } from 'nestjs-zod/z';
import { CreatePropertyReq } from '@core/adapter/dtos/owner/properties.controller.dto';
import * as moment from 'moment-timezone';

describe('Owner', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST /owner/properties`, async () => {
    return request(app.getHttpServer())
      .post('/owner/properties')
      .field('cost', 6_000)
      .field('coverImage', '')
      .field('createdAt', moment().toISOString())
      .field('description', 'Test')
      .field('openDate', moment().toISOString())
      .field('propertyCategoryId', '1')
      .field('title', 'Test')
      .field('updatedAt', moment().toISOString())
      .attach('file', `${__dirname}/fileName.test.file.json`)
      .expect(201);
  });

  it.skip(`/POST owner/properties/file/pass-validation`, async () => {
    return (
      request(app.getHttpServer())
        .post('/owner/properties/file/pass-validation')
        // Attach the file with key 'file' which is corresponding to your endpoint setting.
        .attach('file', `${__dirname}/fileName.test.file.json`)
        .expect(201)
    );
  });

  afterAll(async () => {
    // await app.close();
  });
});