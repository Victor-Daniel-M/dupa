import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { Controller, Inject, Post, Get, Body, Query } from '@nestjs/common';
import {
  ProductProviderApplicationsApplyUsecase,
  ProductProviderApplicationsListUsecase,
  ProductProviderLoginUsecase,
  ProductProviderRegisterUsecase,
} from '@real-estate/application/product-provider';
import {
  ProviderApplicationsListReqBodyDto,
  ProviderApplicationsListReqQueryDto,
  ProviderApplyForProductReqBodyDto,
  ProviderApplyForProductReqQueryDto,
  ProviderLoginDto,
  ProviderRegisterDto,
  ServiceProviderApplicationsReactReqBodyDto,
  ServiceProviderApplicationsReactReqQueryDto,
  ServiceProviderRegisterReqBodyDto,
  ServiceProviderRegisterReqQueryDto,
  ServiceProviderServiceCategoriesListReqBodyDto,
  ServiceProviderServiceCategoriesListReqQueryDto,
  ServiceProviderServicesApplyReqBodyDto,
  ServiceProviderServicesApplyReqQueryDto,
  ServiceProviderServicesCreateReqBodyDto,
  ServiceProviderServicesCreateReqQueryDto,
  ServiceProviderSubscriptionsInitiateTerminateReqBodyDto,
  ServiceProviderSubscriptionsInitiateTerminateReqQueryDto,
  ServiceProviderSubscriptionsListReqBodyDto,
  ServiceProviderSubscriptionsListReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';

@Controller('product-provider')
export class ProductProviderController {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.ProductProviderApplicationsApplyUsecase)
    private productProviderApplicationsApplyUsecase: ProductProviderApplicationsApplyUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ProductProviderApplicationsListUsecase)
    private productProviderApplicationsListUsecase: ProductProviderApplicationsListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ProductProviderLoginUsecase)
    private productProviderLoginUsecase: ProductProviderLoginUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.ProductProviderRegisterUsecase)
    private productProviderRegisterUsecase: ProductProviderRegisterUsecase,
  ) {}

  @Post('applications/apply')
  async applyForApplication(
    @Body() body: ProviderApplyForProductReqBodyDto,
    @Query() query: ProviderApplyForProductReqQueryDto,
  ) {
    return await this.productProviderApplicationsApplyUsecase.execute({
      body,
      query,
    });
  }

  @Get('applications/list')
  async listApplications(@Query() query: ProviderApplicationsListReqQueryDto) {
    return await this.productProviderApplicationsListUsecase.execute({
      query,
      body: {},
    });
  }

  @Post('login')
  async login(@Body() body: ProviderLoginDto) {
    return await this.productProviderLoginUsecase.execute({ body });
  }

  @Post('register')
  async register(@Body() body: ProviderRegisterDto) {
    return await this.productProviderRegisterUsecase.execute({ body });
  }
}
