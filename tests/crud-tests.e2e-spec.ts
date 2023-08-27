import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import * as pluralize from 'pluralize';
import { Complaint } from '@db/domain/entities';
import { BaseEntity } from 'base/base.entity';

class EntityApiTest<T extends BaseEntity> {
  private app: INestApplication;
  private entityId: number;
  public entityName: string;
  public entityPluralName: string;

  constructor(entityName: string) {
    this.entityName = entityName;
    this.entityPluralName = pluralize(this.entityName.toLowerCase());

    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      this.app = moduleFixture.createNestApplication();
      await this.app.init();
    });

    afterAll(async () => {
      await this.app.close();
    });
  }

  async createTestEntity(data: T) {
    const response = await request(this.app.getHttpServer())
      .post(`/${this.entityPluralName}/create`)
      .send(data)
      .expect(201);

    this.entityId = response.body.data.record.id;

    expect(response.body).toEqual(
      expect.objectContaining({
        data: expect.objectContaining({
          record: expect.objectContaining({
            id: expect.any(Number),
          }),
        }),
      }),
    );
  }

  async getTestEntityById() {
    const response = await request(this.app.getHttpServer())
      .get(`/${this.entityPluralName}/one?id=${this.entityId}`)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      }),
    );
  }

  async getPaginatedList() {
    const response = await request(this.app.getHttpServer())
      .get(`/${this.entityPluralName}/paginated`)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        data: expect.objectContaining({
          records: expect.arrayContaining([
            expect.objectContaining({ id: expect.any(Number) }),
          ]),
          // Add other offerings you want to assert
        }),
      }),
    );
  }

  async updateTestEntity(data: T) {
    const response = await request(this.app.getHttpServer())
      .put(`/${this.entityPluralName}/update`)
      .send({
        ...data,
        id: this.entityId,
      })
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        data: expect.objectContaining({
          record: expect.objectContaining({
            id: expect.any(Number),
          }),
        }),
      }),
    );
  }

  async deleteTestEntity() {
    const response = await request(this.app.getHttpServer())
      .delete(`/${this.entityPluralName}/delete?id=${this.entityId}`)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        statusCode: 200,
      }),
    );
  }
}

describe('Role API', () => {
  const entityApiTest = new EntityApiTest<Complaint>('complaints');

  // @ts-ignore
  const complaintDummyData: Complaint = {
    description: 'Some descri',
    offeringId: 1,
    status: 'NOT_YET_RECEIVED',
    title: 'Title',
    userId: 1,
  };

  // Role
  it(`${entityApiTest.entityName} - should create an entity`, async () => {
    await entityApiTest.createTestEntity(complaintDummyData);
  });

  it(`${entityApiTest.entityName} - should get an entity by ID`, async () => {
    await entityApiTest.getTestEntityById();
  });

  it(`${entityApiTest.entityName} - should get a paginated list of entities`, async () => {
    await entityApiTest.getPaginatedList();
  });

  it(`${entityApiTest.entityName} - should update an entity`, async () => {
    // @ts-ignore
    await entityApiTest.updateTestEntity({
      ...complaintDummyData,
      description: 'Test',
    });
  });

  it(`${entityApiTest.entityName} - should delete an entity by ID`, async () => {
    await entityApiTest.deleteTestEntity();
  });
});
