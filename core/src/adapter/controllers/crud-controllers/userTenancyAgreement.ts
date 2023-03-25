import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserTenancyAgreementRepositoryImpl } from '@core/infrastructure/repositories/user-tenancy-agreements-repository';
import { BaseController } from 'base/base.controller';
import { UserTenancyAgreement } from '@core/domain/entities/userTenancyAgreement';

@ApiTags('user-tenancy-agreements')
@Controller('user-tenancy-agreements')
export class UserTenancyAgreementController extends BaseController<UserTenancyAgreement> {
  constructor(
    private readonly usersRepository: UserTenancyAgreementRepositoryImpl,
  ) {
    super(usersRepository);
  }
}
