import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { RealtorRegisterReqDto } from '@core/adapter/dtos/realtor/auth.controller.dto';

describe('Realtor Auth', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST /realtor/auth/register`, async () => {
    return request(app.getHttpServer())
      .post('/realtor/auth/register')
      .send({
        email: 'test@email.com',
        firstName: 'Test',
        lastName: 'Test',
        password: 'Test',
        phoneNumber: '3423423',
      } as RealtorRegisterReqDto)
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
