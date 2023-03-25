import { TenancyAgreement } from '@core/domain/entities/tenancyAgreement';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class TenancyAgreementRepositoryImpl extends BaseRepository<TenancyAgreement> {
  constructor(
    @InjectRepository(TenancyAgreement)
    public repository: Repository<TenancyAgreement>,
  ) {
    super(repository);
  }
}
