import {
  OwnerAssignPropertyDto,
  OwnerUpdateComplaintReqBodyDto,
} from 'real-estate/src/adapter/dtos/owner.controllers.dto';
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
import {
  SearcherAcceptTenancyAgreementReqBodyDto,
  SearcherLoginReqBodyDto,
} from 'real-estate/src/adapter/dtos/searcher.controllers.dto';
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
  let searcherUser: User | null;
  let realtorProperty: Property | null;
  let realtorSchedule: Schedule | null;
  let ownerProperty: Property | null;
  let ownerAgreement: TenancyAgreement | null;
  let searcherAgreement: TenancyAgreement | null;
  let mmPaymentMethod: PaymentMethod | null;
  let rentPaymentCategory: PaymentCategory | null;
  let tenantComplaint: Complaint | null;
  let rentPayment: Payment | null;

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
          ownerProperty = res.body.data.properties[0];

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
        realtorProperty = res.body.data.properties[0];

        console.log('realtorProperty:', realtorProperty);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // realtor should be able to see properites of owners
  it.only('realtor should be able to see properites of owners', async () => {
    await request(app.getHttpServer())
      .get('/properties/paginated')
      .expect((res, error) => {
        formatRes(res);

        if (error) {
          console.log(error);
        }

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              records: expect.arrayContaining([
                expect.objectContaining({
                  ...ownerProperty,
                  cost: Number(ownerProperty?.cost),
                  propertyCategoryId: Number(ownerProperty?.propertyCategoryId),
                }),
              ]),
            }),
          }),
        );
      });
  });

  // request to represent owner property
  it.only('request to represent owner property', async () => {
    const requestToRepresentApplication = {
      userId: realtorUser?.id,
      applicationType: 'REQUEST_TO_REPRESENT',
      refEntityId: ownerProperty?.id,
      refEntityName: 'PROPERTY',
    } as Application;

    return request(app.getHttpServer())
      .post(`/realtor/requests/apply?businessId=${realtorBusiness?.id}`)
      .send(requestToRepresentApplication)
      .expect((res, error) => {
        formatRes(res);

        if (error) {
          console.log(error);
        }

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining(requestToRepresentApplication),
            }),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // Assign property to realtor
  it.only('Owner Assign property', async () => {
    return request(app.getHttpServer())
      .post(`/owner/assign-property?business=${ownerBusiness?.id}`)
      .timeout(10000)
      .send({
        propertyId: ownerProperty?.id,
        userId: realtorUser?.id,
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

  // Realtor should see the assigned under their properties
  it.only('Realtor should see the assigned under their properties', async () => {
    return request(app.getHttpServer())
      .get(`/realtor/properties-list?userId=${realtorUser?.id}`)
      .timeout(10000)
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

  // Register searcher
  it.only('register as searcher', async () => {
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

  it.only('login as searcher', async () => {
    const loginDetails = {
      email: 'searcher@email.com',
    };
    return request(app.getHttpServer())
      .post('/searcher/login')
      .send(loginDetails as SearcherLoginReqBodyDto)

      .expect((res, error) => {
        formatRes(res);

        searcherUser = res.body.data.user;

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              user: expect.objectContaining(loginDetails),
            }),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  // View properties
  it.only('searcher should be able to view properties', async () => {
    return request(app.getHttpServer())
      .get('/searcher/listings/list')
      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              records: expect.arrayContaining([
                expect.objectContaining(ownerProperty),
                expect.objectContaining(realtorProperty),
              ]),
            }),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  // View properties
  it.only('searcher react to properties', async () => {
    return request(app.getHttpServer())
      .post('/searcher/reactions/create')
      .send({
        fromEntityId: searcherUser?.id,
        fromEntityName: 'USER',
        reactionType: 'LIKE',
        toEntityId: ownerProperty?.id,
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
  it.only('realtor create a schedule to visit property', async () => {
    return request(app.getHttpServer())
      .post('/realtor/schedules/create')
      .send({
        fromEntityId: realtorUser?.id,
        fromEntityName: 'USER',
        toEntityId: realtorProperty?.id,
        toEntityName: 'PROPERTY',
        scheduleType: 'PROPERTY_VISIT_SCHEDULE',
        openAt: moment().toISOString(),
        closeAt: moment().toISOString(),
        dayOfWeek: 'FRI',
      } as Schedule)
      .expect((res, error) => {
        formatRes(res);

        realtorSchedule = res.body.data.record;

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
  it.only('searcher request to visit property in set schedule with time', async () => {
    return request(app.getHttpServer())
      .post('/searcher/schedules/applications/create')
      .send({
        userId: searcherUser?.id,
        refEntityId: realtorSchedule?.id,
      } as Application)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining({
                refEntityId: realtorSchedule?.id,
              }),
            }),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('owner create tenancy agreement', async () => {
    const tenancyAgreementData = {
      propertyId: ownerProperty?.id,
      description: `
      The gate will always be closed by 8pm.
      We don't Joke here my friend
      `,
    };
    return request(app.getHttpServer())
      .post('/owner/agreements/create')
      .send(tenancyAgreementData as TenancyAgreement)

      .expect((res, error) => {
        formatRes(res);

        ownerAgreement = res.body.data.record;

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining(tenancyAgreementData),
            }),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('owner send tenancy agreement', async () => {
    const tenancyAgreementData = {
      propertyId: ownerProperty?.id,
      tenancyAgreementId: ownerAgreement?.id,
      userId: searcherUser?.id,
    };
    return request(app.getHttpServer())
      .post('/owner/agreements/send')
      .send(tenancyAgreementData as UserTenancyAgreement)

      .expect((res, error) => {
        formatRes(res);

        searcherAgreement = res.body.data.record;

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining(tenancyAgreementData),
            }),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('searcher view tenancy agreement', async () => {
    return request(app.getHttpServer())
      .get(`/searcher/agreements/get-one?id=${searcherAgreement?.id}`)
      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining(ownerAgreement),
            }),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it.only('accept tenancy agreement', async () => {
    const acceptTenancyAgreementData = {
      id: searcherAgreement?.id,
      status: 'ACCEPTED',
    } as SearcherAcceptTenancyAgreementReqBodyDto;

    return request(app.getHttpServer())
      .post('/searcher/agreements/accept')
      .send(acceptTenancyAgreementData)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining(acceptTenancyAgreementData),
            }),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('admin create payment method', async () => {
    return request(app.getHttpServer())
      .post('/payment-methods/create')
      .send({
        name: 'Mobile Money',
        code: 'MobileMoney',
      } as PaymentMethod)

      .expect((res, error) => {
        formatRes(res);

        mmPaymentMethod = res.body.data.record;

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('admin create payment category', async () => {
    return request(app.getHttpServer())
      .post('/payment-categories/create')
      .send({
        name: 'Rent',
        code: 'Rent',
      } as PaymentCategory)

      .expect((res, error) => {
        formatRes(res);

        rentPaymentCategory = res.body.data.record;

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('pay a booking', async () => {
    return request(app.getHttpServer())
      .post('/payments/create')
      .send({
        entityId: ownerProperty?.id,
        entityName: 'PROPERTY',
        userId: searcherUser?.id,
        paymentMethodId: mmPaymentMethod?.id,
        paymentCategoryId: rentPaymentCategory?.id,
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
  it.only('owner attach property to user as tenant', async () => {
    const userPropertyData = {
      propertyId: ownerProperty?.id,
      userId: searcherUser?.id,
      userPropertyType: 'TENANT',
    } as UserProperty;

    return request(app.getHttpServer())
      .post('/owner/users-properties/attach-searcher-to-property')
      .timeout(10000)
      .send(userPropertyData)
      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining(userPropertyData),
            }),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('tenant file property complaint', async () => {
    const complaintData = {
      propertyId: ownerProperty?.id,
      userId: searcherUser?.id,
      title: 'TENANT',
      description: 'Some description',
    } as Complaint;

    return request(app.getHttpServer())
      .post('/tenant/complaints/create')
      .send(complaintData)
      .expect((res, error) => {
        formatRes(res);

        tenantComplaint = res.body.data.record;

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining(complaintData),
            }),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('owner view property complaints', async () => {
    return request(app.getHttpServer())
      .get('/owner/complaints/list')

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              records: expect.arrayContaining([
                expect.objectContaining(tenantComplaint),
              ]),
            }),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it.only('owner react to property complaints', async () => {
    const complaintsUpdate = {
      id: tenantComplaint?.id,
      status: 'IN_PROGESS',
    } as OwnerUpdateComplaintReqBodyDto;

    return request(app.getHttpServer())
      .put(`/owner/complaints/update`)
      .send(complaintsUpdate)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              record: expect.objectContaining(complaintsUpdate),
            }),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it.only('tenant pay rent', async () => {
    return request(app.getHttpServer())
      .post('/tenant/payments/pay-rent')
      .send({
        entityId: ownerProperty?.id,
        entityName: 'PROPERTY',
        userId: searcherUser?.id,
        paymentMethodId: mmPaymentMethod?.id,
        paymentCategoryId: rentPaymentCategory?.id,
        amount: 1000,
      } as Payment)
      .expect((res, error) => {
        formatRes(res);

        rentPayment = res.body.data.record;

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
          }),
        );

        expect(res.status).toBe(201);
      });
  });

  it.only('owner view payments', async () => {
    return request(app.getHttpServer())
      .get('/owner/payments/list')

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              records: expect.arrayContaining([
                expect.objectContaining(rentPayment),
              ]),
            }),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it.only('owner view rent payments', async () => {
    return request(app.getHttpServer())
      .get(`/owner/payments/list?paymentCategoryId=${rentPaymentCategory?.id}`)

      .expect((res, error) => {
        formatRes(res);

        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            statusCode: expect.any(Number),
            data: expect.objectContaining({
              records: expect.arrayContaining([
                expect.objectContaining(rentPayment),
              ]),
            }),
          }),
        );

        expect(res.status).toBe(200);
      });
  });

  it.todo('provider register');
  it.todo('provider login');
  it.todo('provider apply to provide a given product or service');
  it.todo('admin view applications');
  it.todo('admin react applications');
  it.todo('provider view applications');
  it.todo('owner view providers for a given category of product or service');
  it.todo('owner subscribe for product or service from provider');
  it.todo('provider view subscriptions');
  it.todo('provider react subscriptions');
  it.todo('owner send request for provider providing a service');
  it.todo('provider receive request from owner requesting a service');

  afterAll(async () => {
    // await UserModel.deleteMany({});
    // await DeviceModel.deleteMany({});
  });
});
