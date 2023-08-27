import { ComplaintRepositoryImpl } from '@db/infrastructure/repositories/complaints-repository';
import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerUpdateComplaintReqBodyDto,
  OwnerUpdateComplaintReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerUpdateComplaintReqBodyDto;
  query: OwnerUpdateComplaintReqQueryDto;
};

export class OwnerUpdateComplaintUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ComplaintRepositoryImpl)
    private complaintRepositoryImpl: ComplaintRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body } = data;

    const updatedComplaint = await this.complaintRepositoryImpl.update(body);

    return { record: updatedComplaint };
  }
}
