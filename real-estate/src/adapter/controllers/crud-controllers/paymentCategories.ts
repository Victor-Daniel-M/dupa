import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentCategoryRepositoryImpl } from '@db/infrastructure/repositories/payment-categories-repository';
import { BaseController } from 'base/base.controller';
import { PaymentCategory } from '@db/domain/entities/paymentCategory';

@ApiTags('payment-categories')
@Controller('payment-categories')
export class PaymentCategoriesController extends BaseController<PaymentCategory> {
  constructor(private readonly repository: PaymentCategoryRepositoryImpl) {
    super(repository);
  }
}
