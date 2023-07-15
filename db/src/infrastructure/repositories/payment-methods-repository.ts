import { PaymentMethod } from '@db/domain/entities/paymentMethod';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodRepositoryImpl extends BaseRepository<PaymentMethod> {
  constructor(
    @InjectRepository(PaymentMethod)
    public repository: Repository<PaymentMethod>,
  ) {
    super(repository);
  }
}
