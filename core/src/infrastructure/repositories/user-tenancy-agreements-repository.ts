import { UserTenancyAgreement } from '@core/domain/entities/userTenancyAgreement';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserTenancyAgreementRepositoryImpl extends BaseRepository<UserTenancyAgreement> {
  constructor(
    @InjectRepository(UserTenancyAgreement)
    public repository: Repository<UserTenancyAgreement>,
  ) {
    super(repository);
  }
}
