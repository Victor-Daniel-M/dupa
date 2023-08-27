import { ComplaintRepositoryImpl } from '@db/infrastructure/repositories/complaints-repository';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantComplaintsCreateComplaintReqBodyDto,
  TenantComplaintsCreateComplaintReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantComplaintsCreateComplaintReqBodyDto;
  query: TenantComplaintsCreateComplaintReqQueryDto;
};

export class TenantComplaintsCreateComplaintUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ComplaintRepositoryImpl)
    private complaintRepositoryImpl: ComplaintRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const createdComplaint = await this.complaintRepositoryImpl.create(body);

    return { record: createdComplaint };
  }
}
