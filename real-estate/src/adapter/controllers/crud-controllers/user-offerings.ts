import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserOfferingRepositoryImpl } from '@db/infrastructure/repositories/user-offerings-repository';
import { BaseController } from 'base/base.controller';
import { UserOffering } from '@db/domain/entities/userOfferings';

@ApiTags('users-offerings')
@Controller('users-offerings')
export class UserOfferingController extends BaseController<UserOffering> {
  constructor(private readonly searchRepository: UserOfferingRepositoryImpl) {
    super(searchRepository);
  }
}
