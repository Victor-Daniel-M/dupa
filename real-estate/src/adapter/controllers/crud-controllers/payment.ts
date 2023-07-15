import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentRepositoryImpl } from '@db/infrastructure/repositories/payments-repository';
import { BaseController } from 'base/base.controller';
import { Payment } from '@db/domain/entities/payment';

@ApiTags('payments')
@Controller('payments')
export class PaymentController extends BaseController<Payment> {
  constructor(private readonly repository: PaymentRepositoryImpl) {
    super(repository);
  }
}
