import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserPropertyRepositoryImpl } from '@db/infrastructure/repositories/user-properties-repository';
import { BaseController } from 'base/base.controller';
import { UserProperty } from '@db/domain/entities/userProperties';

@ApiTags('users-properties')
@Controller('users-properties')
export class UserPropertyController extends BaseController<UserProperty> {
  constructor(private readonly searchRepository: UserPropertyRepositoryImpl) {
    super(searchRepository);
  }
}
