import { OwnerAssignPropertyDto } from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import * as request from 'supertest';
import * as moment from 'moment-timezone';
import { Property } from '@db/domain/entities/property';
import { User } from '@db/domain/entities/user';
import { Reaction } from '@db/domain/entities/reaction';
import { Schedule } from '@db/domain/entities/schedules';
import { UserProperty } from '@db/domain/entities/userProperties';
import { Application } from '@db/domain/entities/application';
import { SearcherLoginDto } from 'real-estate/src/adapter/dtos/searcher.controllers.dto';
import { TenancyAgreement } from '@db/domain/entities/tenancyAgreement';
import { UserTenancyAgreement } from '@db/domain/entities/userTenancyAgreement';
import { PaymentMethod } from '@db/domain/entities/paymentMethod';
import { PaymentCategory } from '@db/domain/entities/paymentCategory';
import { Payment } from '@db/domain/entities/payment';
import { Complaint } from '@db/domain/entities/complaint';
import { Business } from '@db/domain/entities/business';

function formatRes(res: any) {
  console.log(JSON.stringify(res));
}

describe('Owner', () => {
  let app: INestApplication;
  let moduleRef: TestingModule;
  let realtorBusiness: Business | null;
  let ownerBusiness: Business | null;
  let realtorUser: User | null;
  let ownerUser: User | null;

  beforeAll(async () => {
    const testingModule = Test.createTestingModule({
      imports: [AppModule],
    });

    testingModule
      .overrideProvider(REAL_ESTATE_TYPES.services.EmailService)
      .useValue({
        async sendLoginEmail(email: string) {},
      });

    moduleRef = await testingModule.compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  // Register
  it.only('register owner', async () => {
    return (
      request(app.getHttpServer())
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
        .attach('properties[0][files][]', `${__dirname}/pic.test.file.png`)
        // .attach('properties[0][files][]', `${__dirname}\\pic.test.file.png`)

        .expect((res, error) => {
          formatRes(res);

          ownerBusiness = res.body.data.business;
          ownerUser = res.body.data.user;

          console.log('ownerBusiness:', ownerBusiness);

          expect(res.body).toEqual(
            expect.objectContaining({
              message: expect.any(String),
              statusCode: expect.any(Number),
            }),
          );

          expect(res.status).toBe(201);
        })
    );
  });

  // Register realtor
  it.only('register realtor', async () => {
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
      .attach('properties[0][files][]', `${__dirname}/pic.test.file.png`)
      .attach('properties[0][files][]', `${__dirname}/pic.test.file.png`)

      .expect((res, error) => {
        formatRes(res);

        realtorBusiness = res.body.data.business;
        realtorUser = res.body.data.user;

        console.log('realtorBusiness:', realtorBusiness);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // request to represent owner property
  it.only('request to represent owner property', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );

    console.log(properties.body);

    const firstProperty: Property = properties.body.data.records[0];

    const users = await request(app.getHttpServer()).get('/users/paginated');
    const firstUser: User = users.body.data.records[0];

    return request(app.getHttpServer())
      .post(`/realtor/requests/apply?businessId=${realtorBusiness?.id}`)
      .send({
        userId: firstUser.id,
        applicationType: 'REQUEST_TO_REPRESENT',
        refEntityId: firstProperty.id,
        refEntityName: 'PROPERTY',
      } as Application)

      .expect((res, error) => {
        formatRes(res);

        if (error) {
          console.log(error);
        }
        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // Assign property to realtor
  it('Owner Assign property', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const realtors = await request(app.getHttpServer()).get('/users/paginated');
    const firstRealtor: User = realtors.body.data.records[0];

    return request(app.getHttpServer())
      .post('/owner/assign-owner-property')
      .timeout(10000)
      .send({
        propertyId: firstProperty.id,
        userId: firstRealtor.id,
        userPropertyType: 'BROKER',
      } as OwnerAssignPropertyDto)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // Register searcher
  it('register as searcher', async () => {
    return request(app.getHttpServer())
      .post('/searcher/register')
      .timeout(10000)
      .send({
        email: 'searcher@email.com',
      })

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('login as searcher', async () => {
    return request(app.getHttpServer())
      .post('/searcher/login')
      .send({
        email: 'searcher@email.com',
        password: '',
      } as SearcherLoginDto)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // View properties
  it('view properties', async () => {
    return request(app.getHttpServer())
      .get('/properties/paginated')
      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  // View properties
  it('react to properties', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const users = await request(app.getHttpServer()).get('/users/paginated');
    const firstUser: User = users.body.data.records[0];

    return request(app.getHttpServer())
      .post('/reactions/create')
      .send({
        fromEntityId: firstUser.id,
        fromEntityName: 'USER',
        reactionType: 'LIKE',
        toEntityId: firstProperty.id,
        toEntityName: 'PROPERTY',
      })
      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // Create a property visit schedule
  it('create a schedule to visit property', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const realtor = await request(app.getHttpServer()).get('/users/paginated');
    const firstRealtor: User = realtor.body.data.records[0];

    return request(app.getHttpServer())
      .post('/schedules/create')
      .send({
        fromEntityId: firstRealtor.id,
        fromEntityName: 'USER',
        toEntityId: firstProperty.id,
        toEntityName: 'PROPERTY',
        scheduleType: 'PROPERTY_VISIT_SCHEDULE',
        openAt: moment().toISOString(),
        closeAt: moment().toISOString(),
        dayOfWeek: 'FRI',
      } as Schedule)
      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // request to visit property in set schedule with time
  it('request to visit property in set schedule with time', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const users = await request(app.getHttpServer()).get('/users/paginated');
    const firstUser: User = users.body.data.records[0];

    const schedules = await request(app.getHttpServer()).get(
      '/schedules/paginated',
    );
    const firstSchedule: User = schedules.body.data.records[0];

    return request(app.getHttpServer())
      .post('/applications/create')
      .send({
        userId: firstUser.id,
        applicationType: 'REQUEST_TO_VISIT',
        refEntityId: firstSchedule.id,
        refEntityName: 'SCHEDULES',
      } as Application)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('create tenancy agreement', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const users = await request(app.getHttpServer()).get('/users/paginated');
    const firstUser: User = users.body.data.records[0];

    return request(app.getHttpServer())
      .post('/tenancy-agreements/create')
      .send({
        propertyId: firstProperty.id,
        description: `
        The gate will always be closed by 8pm.
        We don't Joke here my friend
        `,
      } as TenancyAgreement)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('send tenancy agreement', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const tenancyAgreements = await request(app.getHttpServer()).get(
      '/tenancy-agreements/paginated',
    );
    const firstTenancyAgreement: TenancyAgreement =
      tenancyAgreements.body.data.records[0];

    return request(app.getHttpServer())
      .post('/user-tenancy-agreements/create')
      .send({
        propertyId: firstProperty.id,
        tenancyAgreementId: firstTenancyAgreement.id,
        description: firstTenancyAgreement.description,
      } as UserTenancyAgreement)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('view tenancy agreement', async () => {
    const tenancyAgreements = await request(app.getHttpServer()).get(
      '/tenancy-agreements/paginated',
    );
    const tenancyAgreement: Property = tenancyAgreements.body.data.records[0];

    return request(app.getHttpServer())
      .get(`/tenancy-agreements/get-one?id=${tenancyAgreement.id}`)
      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it('accept tenancy agreement', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const tenancyAgreements = await request(app.getHttpServer()).get(
      '/tenancy-agreements/paginated',
    );
    const firstTenancyAgreement: TenancyAgreement =
      tenancyAgreements.body.data.records[0];

    const userTenancyAgreements = await request(app.getHttpServer()).get(
      '/user-tenancy-agreements/paginated',
    );
    const firstUserTenancyAgreement: TenancyAgreement =
      userTenancyAgreements.body.data.records[0];

    return request(app.getHttpServer())
      .post('/user-tenancy-agreements/create')
      .send({
        propertyId: firstProperty.id,
        tenancyAgreementId: firstUserTenancyAgreement.id,
        description: firstTenancyAgreement.description,
      } as UserTenancyAgreement)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('create payment method', async () => {
    return request(app.getHttpServer())
      .post('/payment-methods/create')
      .send({
        name: 'Test',
        code: 'Test',
      } as PaymentMethod)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('create payment category', async () => {
    return request(app.getHttpServer())
      .post('/payment-categories/create')
      .send({
        name: 'Any',
        code: 'Any',
      } as PaymentCategory)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('pay a booking', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const users = await request(app.getHttpServer()).get('/users/paginated');
    const firstUser: User = users.body.data.records[0];

    const paymentMethods = await request(app.getHttpServer()).get(
      '/payment-methods/paginated',
    );
    const firstPaymentMethod: PaymentMethod = users.body.data.records[0];

    const paymentCategories = await request(app.getHttpServer()).get(
      '/payment-categories/paginated',
    );
    const firstPaymentCategory: PaymentCategory =
      paymentCategories.body.data.records[0];

    return request(app.getHttpServer())
      .post('/payments/create')
      .send({
        entityId: firstProperty.id,
        entityName: 'PROPERTY',
        userId: firstUser.id,
        paymentMethodId: firstPaymentMethod.id,
        paymentCategoryId: firstPaymentCategory.id,
        amount: 1000,
      } as Payment)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // Attach property to user as tenant
  it('attach property to user as tenant', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const users = await request(app.getHttpServer()).get('/users/paginated');
    const firstUser: User = users.body.data.records[0];

    return request(app.getHttpServer())
      .post('/users-properties/create')
      .timeout(10000)
      .send({
        propertyId: firstProperty.id,
        userId: firstUser.id,
        userPropertyType: 'TENANT',
      } as UserProperty)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('file property complaint', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const users = await request(app.getHttpServer()).get('/users/paginated');
    const firstUser: User = users.body.data.records[0];

    return request(app.getHttpServer())
      .post('/complaints/create')
      .send({
        propertyId: firstProperty.id,
        userId: firstUser.id,
        title: 'TENANT',
        description: 'Some description',
      } as Complaint)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('view property complaints', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    return request(app.getHttpServer())
      .get('/complaints/paginated')

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it('react to property complaints', async () => {
    const complaints = await request(app.getHttpServer()).get(
      '/complaints/paginated',
    );
    const firstComplaints: Property = complaints.body.data.records[0];

    return request(app.getHttpServer())
      .put(`/complaints/update`)
      .send({
        id: firstComplaints.id,
        status: 'IN_PROGRESS',
      })

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it('pay rent', async () => {
    const properties = await request(app.getHttpServer()).get(
      '/properties/paginated',
    );
    const firstProperty: Property = properties.body.data.records[0];

    const users = await request(app.getHttpServer()).get('/users/paginated');
    const firstUser: User = users.body.data.records[0];

    const paymentMethods = await request(app.getHttpServer()).get(
      '/payment-methods/paginated',
    );
    const firstPaymentMethod: PaymentMethod =
      paymentMethods.body.data.records[0];

    const paymentCategories = await request(app.getHttpServer()).get(
      '/payment-categories/paginated',
    );
    const firstPaymentCategory: PaymentCategory =
      paymentCategories.body.data.records[0];

    return request(app.getHttpServer())
      .post('/payments/create')
      .send({
        entityId: firstProperty.id,
        entityName: 'PROPERTY',
        userId: firstUser.id,
        paymentMethodId: firstPaymentMethod.id,
        paymentCategoryId: firstPaymentCategory.id,
        amount: 1000,
      } as Payment)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it('view payments', async () => {
    return request(app.getHttpServer())
      .get('/payments/paginated')

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it('view rent payments', async () => {
    return request(app.getHttpServer())
      .get('/payments/paginated')

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it('search properties', async () => {
    return request(app.getHttpServer())
      .get('/properties/paginated')

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  afterAll(async () => {
    // await UserModel.deleteMany({});
    // await DeviceModel.deleteMany({});
  });
});
