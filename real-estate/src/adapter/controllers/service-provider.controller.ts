import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { Controller, Inject, Post, Get, Body, Query } from '@nestjs/common';
import {
  ServiceProviderApplicationsReactReqBodyDto,
  ServiceProviderApplicationsReactReqQueryDto,
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

@Controller('service-provider')
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
  async register(
    @Body() body: ServiceProviderRegisterReqBodyDto,
    @Query() query: ServiceProviderRegisterReqQueryDto,
  ) {
    return await this.serviceProviderRegisterUsecase.execute({ body, query });
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
