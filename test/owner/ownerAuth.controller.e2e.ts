import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { OwnerRegisterReqDto } from '@core/adapter/dtos/owner/auth.controller.dto';

describe('Owner Auth', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST /owner/auth/register`, async () => {
    return request(app.getHttpServer())
      .post('/owner/auth/register')
      .send({
        email: 'test@email.com',
        firstName: 'Test',
        lastName: 'Test',
        password: 'Test',
        phoneNumber: '3423423',
      } as OwnerRegisterReqDto)
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
