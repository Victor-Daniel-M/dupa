import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentMethodRepositoryImpl } from '@db/infrastructure/repositories/payment-methods-repository';
import { BaseController } from 'base/base.controller';
import { PaymentMethod } from '@db/domain/entities/paymentMethod';

@ApiTags('payment-methods')
@Controller('payment-methods')
export class PaymentMethodsController extends BaseController<PaymentMethod> {
  constructor(private readonly repository: PaymentMethodRepositoryImpl) {
    super(repository);
  }
}
