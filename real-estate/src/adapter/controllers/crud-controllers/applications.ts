import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { BaseController } from 'base/base.controller';
import { Application } from '@db/domain/entities/application';

@ApiTags('applications')
@Controller('applications')
export class ApplicationController extends BaseController<Application> {
  constructor(private readonly repository: ApplicationRepositoryImpl) {
    super(repository);
  }
}
