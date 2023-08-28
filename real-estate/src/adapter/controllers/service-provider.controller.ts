import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  Controller,
  Inject,
  Post,
  Get,
  Body,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import {
  ProviderApplyForOfferingCategoryReqBodyDto,
  ProviderApplyForOfferingCategoryReqQueryDto,
  ServiceProviderApplicationsReactReqBodyDto,
  ServiceProviderApplicationsReactReqQueryDto,
  ServiceProviderLoginReqBodyDto,
  ServiceProviderLoginReqQueryDto,
  ServiceProviderRegisterReqBodyDto,
  ServiceProviderRegisterReqQueryDto,
  ServiceProviderServiceCategoriesListReqQueryDto,
  ServiceProviderServicesApplyReqBodyDto,
  ServiceProviderServicesApplyReqQueryDto,
  ServiceProviderServicesCreateReqBodyDto,
  ServiceProviderServicesCreateReqQueryDto,
  ServiceProviderSubscriptionsInitiateTerminateReqBodyDto,
  ServiceProviderSubscriptionsInitiateTerminateReqQueryDto,
  ServiceProviderSubscriptionsListReqQueryDto,
  ServiceProviderViewApplicationsListReqBodyDto,
  ServiceProviderViewApplicationsListReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';
import {
  ServiceProviderApplicationsReactUsecase,
  ServiceProviderRegisterUsecase,
  ServiceProviderServiceCategoriesListUsecase,
  ServiceProviderServicesApplyUsecase,
  ServiceProviderServicesCreateUsecase,
  ServiceProviderSubscriptionsInitiateTerminateUsecase,
  ServiceProviderSubscriptionsListUsecase,
} from '@real-estate/application/service-provider'; // Update the path
import { FilesInterceptor } from '@nestjs/platform-express';
import { ResponseInterceptor } from '@common/filters-interceptors/src';
import { ServiceProviderLoginUsecase } from '@real-estate/application/service-provider/login';
import { ServiceProviderApplyForOfferingCategoryUsecase } from '@real-estate/application/service-provider/applications-apply-to-provide-offering';
import { ServiceProviderApplicationsListUsecase } from '@real-estate/application/service-provider/applications-list';

@Controller('service-provider')
@UseInterceptors(ResponseInterceptor)
export class ServiceProviderController {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.ServiceProviderApplicationsReactUsecase)
    private serviceProviderApplicationsReactUsecase: ServiceProviderApplicationsReactUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ServiceProviderRegisterUsecase)
    private serviceProviderRegisterUsecase: ServiceProviderRegisterUsecase,
    @Inject(
      REAL_ESTATE_TYPES.useCases.ServiceProviderServiceCategoriesListUsecase,
    )
    private serviceProviderServiceCategoriesListUsecase: ServiceProviderServiceCategoriesListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ServiceProviderServicesApplyUsecase)
    private serviceProviderServicesApplyUsecase: ServiceProviderServicesApplyUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ServiceProviderServicesCreateUsecase)
    private serviceProviderServicesCreateUsecase: ServiceProviderServicesCreateUsecase,
    @Inject(
      REAL_ESTATE_TYPES.useCases
        .ServiceProviderSubscriptionsInitiateTerminateUsecase,
    )
    private serviceProviderSubscriptionsInitiateTerminateUsecase: ServiceProviderSubscriptionsInitiateTerminateUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ServiceProviderSubscriptionsListUsecase)
    private serviceProviderSubscriptionsListUsecase: ServiceProviderSubscriptionsListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ServiceProviderLoginUsecase)
    private serviceProviderLoginUsecase: ServiceProviderLoginUsecase,
    @Inject(
      REAL_ESTATE_TYPES.useCases.ServiceProviderApplyForOfferingCategoryUsecase,
    )
    private serviceProviderApplyForOfferingCategoryUsecase: ServiceProviderApplyForOfferingCategoryUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ServiceProviderApplicationsListUsecase)
    private serviceProviderApplicationsListUsecase: ServiceProviderApplicationsListUsecase,
  ) {}

  @Post('applications/react')
  async reactToApplication(
    @Query() query: ServiceProviderApplicationsReactReqQueryDto,
    @Body() body: ServiceProviderApplicationsReactReqBodyDto,
  ) {
    return await this.serviceProviderApplicationsReactUsecase.execute({
      query,
      body,
    });
  }

  @Post('register')
  @UseInterceptors(FilesInterceptor('offerings[0][files][]', 1))
  async register(
    @Body() body: ServiceProviderRegisterReqBodyDto,
    @Query() query: ServiceProviderRegisterReqQueryDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return await this.serviceProviderRegisterUsecase.execute({
      body,
      query,
      files,
    });
  }

  @Post('login')
  async login(
    @Body() body: ServiceProviderLoginReqBodyDto,
    @Query() query: ServiceProviderLoginReqQueryDto,
  ) {
    return await this.serviceProviderLoginUsecase.execute({
      body,
      query,
    });
  }

  @Get('service-categories/list')
  async listServiceCategories(
    @Query() query: ServiceProviderServiceCategoriesListReqQueryDto,
  ) {
    return await this.serviceProviderServiceCategoriesListUsecase.execute({
      query,
      body: {},
    });
  }

  @Post('services/apply')
  async applyForService(
    @Query() query: ServiceProviderServicesApplyReqQueryDto,
    @Body() body: ServiceProviderServicesApplyReqBodyDto,
  ) {
    return await this.serviceProviderServicesApplyUsecase.execute({
      query,
      body,
    });
  }

  @Post('services/apply-for-offering-category')
  async applyForOfferingCategory(
    @Body() body: ProviderApplyForOfferingCategoryReqBodyDto,
    @Query() query: ProviderApplyForOfferingCategoryReqQueryDto,
  ) {
    return await this.serviceProviderApplyForOfferingCategoryUsecase.execute({
      query,
      body,
    });
  }

  @Get('applications/list')
  async applicationsList(
    @Body() body: ServiceProviderViewApplicationsListReqBodyDto,
    @Query() query: ServiceProviderViewApplicationsListReqQueryDto,
  ) {
    return await this.serviceProviderApplicationsListUsecase.execute({
      query,
      body,
    });
  }

  @Post('services/create')
  async createService(
    @Body() body: ServiceProviderServicesCreateReqBodyDto,
    @Query() query: ServiceProviderServicesCreateReqQueryDto,
  ) {
    return await this.serviceProviderServicesCreateUsecase.execute({
      body,
      query,
    });
  }

  @Post('subscriptions/initiate-terminate')
  async initiateOrTerminateSubscription(
    @Query() query: ServiceProviderSubscriptionsInitiateTerminateReqQueryDto,
    @Body() body: ServiceProviderSubscriptionsInitiateTerminateReqBodyDto,
  ) {
    return await this.serviceProviderSubscriptionsInitiateTerminateUsecase.execute(
      { query, body },
    );
  }

  @Get('subscriptions/list')
  async listSubscriptions(
    @Query() query: ServiceProviderSubscriptionsListReqQueryDto,
  ) {
    return await this.serviceProviderSubscriptionsListUsecase.execute({
      query,
      body: {},
    });
  }
}
