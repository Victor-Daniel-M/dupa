import { Complaint } from '@core/domain/entities/complaint';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ComplaintRepositoryImpl extends BaseRepository<Complaint> {
  constructor(
    @InjectRepository(Complaint)
    public repository: Repository<Complaint>,
  ) {
    super(repository);
  }
}
