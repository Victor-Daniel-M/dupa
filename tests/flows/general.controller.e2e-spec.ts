import {
  OwnerAssignPropertyDto,
  OwnerRegisterDto,
} from '@core/adapter/dtos/owner.controllers.dto';
import { TYPES } from '@core/domain/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import * as request from 'supertest';
import * as moment from 'moment-timezone';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { Property } from '@core/domain/entities/property';
import { User } from '@core/domain/entities/user';

describe('Owner', () => {
  let app: INestApplication;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    const testingModule = Test.createTestingModule({
      imports: [AppModule],
    });

    testingModule.overrideProvider(TYPES.services.EmailService).useValue({
      async sendLoginEmail(email: string) {},
    });

    moduleRef = await testingModule.compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  // Register
  it.only('register', async () => {
    return request(app.getHttpServer())
      .post('/owner/register')
      .timeout(10000)
      .type('form')
      .field('email', 'owner@email.com')
      .field('properties[0][cost]', 6_000)
      .field('properties[0][coverImage]', '')
      .field('properties[0][description]', 'Test')
      .field('properties[0][openDate]', moment().toISOString())
      .field('properties[0][propertyCategoryId]', '1')
      .field('properties[0][title]', 'Test')
      .attach('properties[0][files][]', `${__dirname}\\pic.test.file.png`)
      .attach('properties[0][files][]', `${__dirname}\\pic.test.file.png`)

      .expect((res, error) => {
        // console.log(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // Register realtor
  it.only('register', async () => {
    return request(app.getHttpServer())
      .post('/realtor/register')
      .timeout(10000)
      .type('form')
      .field('email', 'realtor@email.com')
      .field('properties[0][cost]', 6_000)
      .field('properties[0][coverImage]', '')
      .field('properties[0][description]', 'Test')
      .field('properties[0][openDate]', moment().toISOString())
      .field('properties[0][propertyCategoryId]', '1')
      .field('properties[0][title]', 'Test')
      .attach('properties[0][files][]', `${__dirname}\\pic.test.file.png`)
      .attach('properties[0][files][]', `${__dirname}\\pic.test.file.png`)

      .expect((res, error) => {
        // console.log(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // Register realtor
  it.only('register', async () => {
    const properties = await request(app.getHttpServer()).get('/properties/');
    const firstProperty: Property = properties.body[0];

    const realtors = await request(app.getHttpServer()).get('/users/');
    const firstRealtor: User = realtors.body[0];

    return request(app.getHttpServer())
      .post('/owner/assign-owner-property')
      .timeout(10000)
      .send({
        propertyId: firstProperty.id,
        userId: firstRealtor.id,
        userPropertyType: 'BROKER',
      } as OwnerAssignPropertyDto)

      .expect((res, error) => {
        // console.log(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });

    expect(true).toBe(true);
  });

  afterAll(async () => {
    // await UserModel.deleteMany({});
    // await DeviceModel.deleteMany({});
  });
});
