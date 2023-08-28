import { Controller, Inject, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { BaseController } from 'base/base.controller';
import { Application } from '@db/domain/entities/application';
import { DB_TYPES } from '@db/types';
import { BusinessOfferingCategoryRepositoryImpl } from '@db/infrastructure/repositories/businesses-offering-categories';

@ApiTags('applications')
@Controller('applications')
export class ApplicationController extends BaseController<Application> {
  constructor(
    private readonly repository: ApplicationRepositoryImpl,
    @Inject(DB_TYPES.repositories.BusinessOfferingCategoryRepositoryImpl)
    private BusinessOfferingCategoryRepositoryImpl: BusinessOfferingCategoryRepositoryImpl,
  ) {
    super(repository);
  }

  @Put('update')
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  async update(data: Application) {
    const { record: application } = await super.findById(data.id!);

    if (
      application.applicationType == 'REQUEST_TO_PROVIDE_OFFERING' &&
      data.status == 'ACCEPTED'
    ) {
      await this.BusinessOfferingCategoryRepositoryImpl.create({
        businessId: application.businessId!,
        offeringCategoryId: application.refEntityId,
      });
    }

    return super.update(data);
  }
}
