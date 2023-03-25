import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TenancyAgreementRepositoryImpl } from '@core/infrastructure/repositories/tenancy-agreements-repository';
import { BaseController } from 'base/base.controller';
import { TenancyAgreement } from '@core/domain/entities/tenancyAgreement';

@ApiTags('tenancy-agreements')
@Controller('tenancy-agreements')
export class TenancyAgreementController extends BaseController<TenancyAgreement> {
  constructor(private readonly repository: TenancyAgreementRepositoryImpl) {
    super(repository);
  }
}
