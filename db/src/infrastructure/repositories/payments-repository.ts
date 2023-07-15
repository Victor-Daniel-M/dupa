import { Payment } from '@db/domain/entities/payment';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentRepositoryImpl extends BaseRepository<Payment> {
  constructor(
    @InjectRepository(Payment)
    public repository: Repository<Payment>,
  ) {
    super(repository);
  }
}
