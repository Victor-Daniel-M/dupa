import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddressRepositoryImpl } from '@core/infrastructure/repositories/addresses-repository';
import { BaseController } from 'base/base.controller';
import { Address } from '@core/domain/entities/address';

@ApiTags('addresses')
@Controller('addresses')
export class AddressesController extends BaseController<Address> {
  constructor(private readonly addresssRepository: AddressRepositoryImpl) {
    super(addresssRepository);
  }
}
