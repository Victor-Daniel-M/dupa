import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'common/filters-interceptors/src';

import { REAL_ESTATE_TYPES } from '@real-estate/types';

import {
  TenantComplaintsCreateComplaintReqBodyDto,
  TenantComplaintsCreateComplaintReqQueryDto,
  TenantComplaintsDeleteComplaintReqBodyDto,
  TenantComplaintsDeleteComplaintReqQueryDto,
  TenantComplaintsUpdateComplaintReqBodyDto,
  TenantComplaintsUpdateComplaintReqQueryDto,
  TenantPaymentsMakePaymentReqBodyDto,
  TenantPaymentsMakePaymentReqQueryDto,
  TenantProductsApplyForProductReqBodyDto,
  TenantProductsApplyForProductReqQueryDto,
  TenantProductsListProductsReqBodyDto,
  TenantProductsListProductsReqQueryDto,
  TenantServiceProvidersListServiceProvidersReqBodyDto,
  TenantServiceProvidersListServiceProvidersReqQueryDto,
  TenantServicesApplyForServiceReqBodyDto,
  TenantServicesApplyForServiceReqQueryDto,
  TenantServicesListServicesReqBodyDto,
  TenantServicesListServicesReqQueryDto,
  TenantTenanciesEndTenancyReqBodyDto,
  TenantTenanciesEndTenancyReqQueryDto,
  TenantTenanciesListAgreementsReqBodyDto,
  TenantTenanciesListAgreementsReqQueryDto,
  TenantTenanciesViewAgreementReqBodyDto,
  TenantTenanciesViewAgreementReqQueryDto,
} from '../dtos/tenant.controllers.dto'; // Update the path
import {
  TenantComplaintsCreateComplaintUsecase,
  TenantComplaintsDeleteComplaintUsecase,
  TenantComplaintsUpdateComplaintUsecase,
  TenantPaymentsMakePaymentUsecase,
  TenantProductsApplyForProductUsecase,
  TenantProductsListProductsUsecase,
  TenantServiceProvidersListServiceProvidersUsecase,
  TenantServicesApplyForServiceUsecase,
  TenantServicesListServicesUsecase,
  TenantTenanciesEndTenancyUsecase,
  TenantTenanciesListAgreementsUsecase,
  TenantTenanciesViewAgreementUsecase,
  TenantsLoginUsecase,
  TenantsRegisterUsecase,
} from '@real-estate/application/tenant';

@ApiTags('tenant')
@Controller('tenant')
@UseInterceptors(ResponseInterceptor)
export class TenantController {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.TenantsLoginUsecase)
    private tenantLoginUsecase: TenantsLoginUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantsRegisterUsecase)
    private tenantRegisterUsecase: TenantsRegisterUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantsRegisterUsecase)
    private tenantCreateComplaintUsecase: TenantComplaintsCreateComplaintUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantComplaintsCreateComplaintUsecase)
    private tenantDeleteComplaintUsecase: TenantComplaintsDeleteComplaintUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantComplaintsUpdateComplaintUsecase)
    private tenantUpdateComplaintUsecase: TenantComplaintsUpdateComplaintUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantPaymentsMakePaymentUsecase)
    private tenantMakePaymentUsecase: TenantPaymentsMakePaymentUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantProductsApplyForProductUsecase)
    private tenantProductsApplyForProductUsecase: TenantProductsApplyForProductUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantProductsListProductsUsecase)
    private tenantProductsListProductsUsecase: TenantProductsListProductsUsecase,
    @Inject(
      REAL_ESTATE_TYPES.useCases
        .TenantServiceProvidersListServiceProvidersUsecase,
    )
    private tenantServiceProvidersListServiceProvidersUsecase: TenantServiceProvidersListServiceProvidersUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantServicesApplyForServiceUsecase)
    private tenantServicesApplyForServiceUsecase: TenantServicesApplyForServiceUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantServicesListServicesUsecase)
    private tenantServicesListServicesUsecase: TenantServicesListServicesUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantTenanciesEndTenancyUsecase)
    private tenantEndTenancyUsecase: TenantTenanciesEndTenancyUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantTenanciesListAgreementsUsecase)
    private tenantListAgreementsUsecase: TenantTenanciesListAgreementsUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.TenantTenanciesViewAgreementUsecase)
    private tenantViewAgreementUsecase: TenantTenanciesViewAgreementUsecase,
  ) {}

  @Post('login')
  async login(
    @Body() body: TenantsLoginUsecase,
    @Query() query: TenantsLoginUsecase,
  ) {
    return await this.tenantLoginUsecase.execute({
      body,
      query,
    });
  }

  @Post('register')
  async register(
    @Body() body: TenantsRegisterUsecase,
    @Query() query: TenantsRegisterUsecase,
  ) {
    return await this.tenantRegisterUsecase.execute({
      body,
      query,
    });
  }

  @Post('create-complaint')
  async createComplaint(
    @Body() body: TenantComplaintsCreateComplaintReqBodyDto,
    @Query() query: TenantComplaintsCreateComplaintReqQueryDto,
  ) {
    return await this.tenantCreateComplaintUsecase.execute({
      body,
      query,
    });
  }

  @Delete('delete-complaint')
  async deleteComplaint(
    @Body() body: TenantComplaintsDeleteComplaintReqBodyDto,
    @Query() query: TenantComplaintsDeleteComplaintReqQueryDto,
  ) {
    return await this.tenantDeleteComplaintUsecase.execute({
      body,
      query,
    });
  }

  @Patch('update-complaint')
  async updateComplaint(
    @Body() body: TenantComplaintsUpdateComplaintReqBodyDto,
    @Query() query: TenantComplaintsUpdateComplaintReqQueryDto,
  ) {
    return await this.tenantUpdateComplaintUsecase.execute({
      body,
      query,
    });
  }

  @Post('end-tenancy')
  async endTenancy(
    @Body() body: TenantTenanciesEndTenancyReqBodyDto,
    @Query() query: TenantTenanciesEndTenancyReqQueryDto,
  ) {
    return await this.tenantEndTenancyUsecase.execute({
      body,
      query,
    });
  }

  @Get('list-agreements')
  async listAgreements(
    @Query() query: TenantTenanciesListAgreementsReqQueryDto,
  ) {
    return await this.tenantListAgreementsUsecase.execute({
      query,
      body: {},
    });
  }

  @Get('view-agreement')
  async viewAgreement(@Query() query: TenantTenanciesViewAgreementReqQueryDto) {
    return await this.tenantViewAgreementUsecase.execute({
      query,
      body: {},
    });
  }

  @Post('payments-make')
  async makePayment(
    @Body() body: TenantPaymentsMakePaymentReqBodyDto,
    @Query() query: TenantPaymentsMakePaymentReqQueryDto,
  ) {
    return await this.tenantMakePaymentUsecase.execute({
      body,
      query,
    });
  }

  @Post('products-apply')
  async applyForProduct(
    @Body() body: TenantProductsApplyForProductReqBodyDto,
    @Query() query: TenantProductsApplyForProductReqQueryDto,
  ) {
    return await this.tenantProductsApplyForProductUsecase.execute({
      body,
      query,
    });
  }

  @Get('products-list')
  async listProducts(@Query() query: TenantProductsListProductsReqQueryDto) {
    return await this.tenantProductsListProductsUsecase.execute({
      query,
      body: {},
    });
  }

  @Get('service-providers-list')
  async listServiceProviders(
    @Query() query: TenantServiceProvidersListServiceProvidersReqQueryDto,
  ) {
    return await this.tenantServiceProvidersListServiceProvidersUsecase.execute(
      {
        query,
        body: {},
      },
    );
  }

  @Post('services-apply')
  async applyForService(
    @Body() body: TenantServicesApplyForServiceReqBodyDto,
    @Query() query: TenantServicesApplyForServiceReqQueryDto,
  ) {
    return await this.tenantServicesApplyForServiceUsecase.execute({
      body,
      query,
    });
  }

  @Get('services-list')
  async listServices(@Query() query: TenantServicesListServicesReqQueryDto) {
    return await this.tenantServicesListServicesUsecase.execute({
      query,
      body: {},
    });
  }
}
