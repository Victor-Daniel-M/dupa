import { PaymentCategory } from '@db/domain/entities/paymentCategory';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentCategoryRepositoryImpl extends BaseRepository<PaymentCategory> {
  constructor(
    @InjectRepository(PaymentCategory)
    public repository: Repository<PaymentCategory>,
  ) {
    super(repository);
  }
}
