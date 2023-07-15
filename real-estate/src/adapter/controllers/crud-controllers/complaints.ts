import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComplaintRepositoryImpl } from '@db/infrastructure/repositories/complaints-repository';
import { BaseController } from 'base/base.controller';
import { Complaint } from '@db/domain/entities/complaint';

@ApiTags('complaints')
@Controller('complaints')
export class ComplaintController extends BaseController<Complaint> {
  constructor(private readonly repository: ComplaintRepositoryImpl) {
    super(repository);
  }
}
