import { REAL_ESTATE_TYPES } from '../../types';
import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import {
  OwnerAssignPropertyDto,
  OwnerRegisterDto,
  OwnerListingsViewListReqBodyDto,
  OwnerListingsViewListReqQueryDto,
  OwnerLoginReqBodyDto,
  OwnerLoginReqQueryDto,
  OwnerViewComplaintsListReqQueryDto,
  OwnerPaymentsCollectPaymentReqBodyDto,
  OwnerPaymentsCollectPaymentReqQueryDto,
  OwnerPaymentsPayReqBodyDto,
  OwnerPaymentsPayReqQueryDto,
  OwnerPaymentsRecordPaymentReqBodyDto,
  OwnerPaymentsRecordPaymentReqQueryDto,
  OwnerProductsApplyForProductReqBodyDto,
  OwnerProductsApplyForProductReqQueryDto,
  OwnerProductsViewListReqBodyDto,
  OwnerProductsViewListReqQueryDto,
  OwnerPropertiesPairWithUserReqBodyDto,
  OwnerPropertiesPairWithUserReqQueryDto,
  OwnerReactToApplicationReqBodyDto,
  OwnerReactToApplicationReqQueryDto,
  OwnerRealtorsConnectWithRealtorsReqBodyDto,
  OwnerRealtorsConnectWithRealtorsReqQueryDto,
  OwnerRealtorsRequestToRepresentReqBodyDto,
  OwnerRealtorsRequestToRepresentReqQueryDto,
  OwnerRealtorsViewListReqBodyDto,
  OwnerRealtorsViewListReqQueryDto,
  OwnerResolveComplaintsReqBodyDto,
  OwnerResolveComplaintsReqQueryDto,
  OwnerServiceProvidersApplyForServiceReqBodyDto,
  OwnerServiceProvidersApplyForServiceReqQueryDto,
  OwnerServiceProvidersViewListReqBodyDto,
  OwnerServiceProvidersViewListReqQueryDto,
  OwnerServicesRequestServiceReqBodyDto,
  OwnerServicesRequestServiceReqQueryDto,
  OwnerTenanciesCreateAgreementReqBodyDto,
  OwnerTenanciesCreateAgreementReqQueryDto,
  OwnerTenanciesDeleteAgreementReqBodyDto,
  OwnerTenanciesDeleteAgreementReqQueryDto,
  OwnerTenanciesListAgreementsReqBodyDto,
  OwnerTenanciesListAgreementsReqQueryDto,
  OwnerTenanciesUpdateAgreementsReqBodyDto,
  OwnerTenanciesUpdateAgreementsReqQueryDto,
  OwnerTenantsCreateTenantReqBodyDto,
  OwnerTenantsCreateTenantReqQueryDto,
  OwnerTenantsDeleteTenantReqBodyDto,
  OwnerTenantsDeleteTenantReqQueryDto,
  OwnerTenantsListTenantsReqBodyDto,
  OwnerTenantsListTenantsReqQueryDto,
  OwnerTenantsSendRentReminderReqBodyDto,
  OwnerTenantsSendRentReminderReqQueryDto,
  OwnerTenantsUpdateTenantReqBodyDto,
  OwnerTenantsUpdateTenantReqQueryDto,
  OwnerViewApplicationsListReqBodyDto,
  OwnerViewApplicationsListReqQueryDto,
  OwnerViewComplaintsListReqBodyDto,
  SendTenancyAgreementByOwner,
} from '../dtos/owner.controllers.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { S3Provider } from 'real-estate/src/infrastructure/services/s3Provider.service';

import {
  OwnerApplicationsListUsecase,
  OwnerApplicationsReactUsecase,
  OwnerAssignPropertyUsecase,
  OwnerAuthLoginUsecase,
  OwnerComplaintsListUsecase,
  OwnerComplaintsResolveUsecase,
  OwnerListingsViewActivityUsecase,
  OwnerListingsViewListUsecase,
  OwnerPaymentsCollectPaymentUsecase,
  OwnerPaymentsPayUsecase,
  OwnerPaymentsRecordPaymentUsecase,
  OwnerProductsApplyForProductUsecase,
  OwnerProductsViewListUsecase,
  OwnerPropertiesCreateManyUsecase,
  OwnerPropertiesPairWithUserUsecase,
  OwnerRealtorsConnectWithRealtorsUsecase,
  OwnerRealtorsRequestToRepresentUsecase,
  OwnerRealtorsViewListUsecase,
  OwnerRegisterUsecase,
  OwnerServiceProvidersApplyForServiceUsecase,
  OwnerServiceProvidersViewListUsecase,
  OwnerServicesRequestServiceUsecase,
  OwnerTenanciesCreateAgreementUsecase,
  OwnerTenanciesDeleteAgreementUsecase,
  OwnerTenanciesListAgreementsUsecase,
  OwnerTenanciesUpdateAgreementsUsecase,
  OwnerTenantsCreateTenantUsecase,
  OwnerTenantsDeleteTenantUsecase,
  OwnerTenantsListTenantsUsecase,
  OwnerTenantsSendRentReminderUsecase,
  OwnerTenantsUpdateTenantUsecase,
  // ... Other use cases
} from '@real-estate/application/owner'; // Update the path

@ApiTags('owner')
@Controller('owner')
@UseInterceptors(ResponseInterceptor)
export class OwnerController {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerApplicationsListUsecase)
    private ownerApplicationsListUsecase: OwnerApplicationsListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerApplicationsReactUsecase)
    private ownerApplicationsReactUsecase: OwnerApplicationsReactUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerAssignPropertyUsecase)
    private ownerAssignPropertyUsecase: OwnerAssignPropertyUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerAuthLoginUsecase)
    private ownerAuthLoginUsecase: OwnerAuthLoginUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerComplaintsListUsecase)
    private ownerComplaintsListUsecase: OwnerComplaintsListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerComplaintsResolveUsecase)
    private ownerComplaintsResolveUsecase: OwnerComplaintsResolveUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerListingsViewActivityUsecase)
    private ownerListingsViewActivityUsecase: OwnerListingsViewActivityUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerListingsViewListUsecase)
    private ownerListingsViewListUsecase: OwnerListingsViewListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerPaymentsCollectPaymentUsecase)
    private ownerPaymentsCollectPaymentUsecase: OwnerPaymentsCollectPaymentUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerPaymentsPayUsecase)
    private ownerPaymentsPayUsecase: OwnerPaymentsPayUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerPaymentsRecordPaymentUsecase)
    private ownerPaymentsRecordPaymentUsecase: OwnerPaymentsRecordPaymentUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerProductsApplyForProductUsecase)
    private ownerProductsApplyForProductUsecase: OwnerProductsApplyForProductUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerProductsViewListUsecase)
    private ownerProductsViewListUsecase: OwnerProductsViewListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerPropertiesCreateManyUsecase)
    private ownerPropertiesCreateManyUsecase: OwnerPropertiesCreateManyUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerPropertiesPairWithUserUsecase)
    private ownerPropertiesPairWithUserUsecase: OwnerPropertiesPairWithUserUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerRealtorsConnectWithRealtorsUsecase)
    private ownerRealtorsConnectWithRealtorsUsecase: OwnerRealtorsConnectWithRealtorsUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerRealtorsRequestToRepresentUsecase)
    private ownerRealtorsRequestToRepresentUsecase: OwnerRealtorsRequestToRepresentUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerRealtorsViewListUsecase)
    private ownerRealtorsViewListUsecase: OwnerRealtorsViewListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerRegisterUsecase)
    private ownerRegisterUsecase: OwnerRegisterUsecase,
    @Inject(
      REAL_ESTATE_TYPES.useCases.OwnerServiceProvidersApplyForServiceUsecase,
    )
    private ownerServiceProvidersApplyForServiceUsecase: OwnerServiceProvidersApplyForServiceUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerServiceProvidersViewListUsecase)
    private ownerServiceProvidersViewListUsecase: OwnerServiceProvidersViewListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerServicesRequestServiceUsecase)
    private ownerServicesRequestServiceUsecase: OwnerServicesRequestServiceUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenanciesCreateAgreementUsecase)
    private ownerTenanciesCreateAgreementUsecase: OwnerTenanciesCreateAgreementUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenanciesDeleteAgreementUsecase)
    private ownerTenanciesDeleteAgreementUsecase: OwnerTenanciesDeleteAgreementUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenanciesListAgreementsUsecase)
    private ownerTenanciesListAgreementsUsecase: OwnerTenanciesListAgreementsUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenanciesUpdateAgreementsUsecase)
    private ownerTenanciesUpdateAgreementsUsecase: OwnerTenanciesUpdateAgreementsUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenantsCreateTenantUsecase)
    private ownerTenantsCreateTenantUsecase: OwnerTenantsCreateTenantUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenantsDeleteTenantUsecase)
    private ownerTenantsDeleteTenantUsecase: OwnerTenantsDeleteTenantUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenantsListTenantsUsecase)
    private ownerTenantsListTenantsUsecase: OwnerTenantsListTenantsUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenantsSendRentReminderUsecase)
    private ownerTenantsSendRentReminderUsecase: OwnerTenantsSendRentReminderUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerTenantsUpdateTenantUsecase)
    private ownerTenantsUpdateTenantUsecase: OwnerTenantsUpdateTenantUsecase,
  ) {}

  @Post('register')
  @UseInterceptors(FilesInterceptor('properties[0][files][]', 1))
  async register(
    @Body() body: OwnerRegisterDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    // @ts-ignore
    // console.log('body, files:', body, body.properties[0].files, files);

    return await this.ownerRegisterUsecase.execute({
      body,
      files,
    });
  }

  @Get('applications/list')
  async listApplications(
    @Body() body: OwnerViewApplicationsListReqBodyDto,
    @Query() query: OwnerViewApplicationsListReqQueryDto,
  ) {
    return await this.ownerApplicationsListUsecase.execute({
      body,
      query,
    });
  }

  @Post('applications/react')
  async reactToApplication(
    @Body() body: OwnerReactToApplicationReqBodyDto,
    @Query() query: OwnerReactToApplicationReqQueryDto,
  ) {
    return await this.ownerApplicationsReactUsecase.execute({ body, query });
  }

  @Post('assign-property')
  async assignProperty(@Body() body: OwnerAssignPropertyDto) {
    return await this.ownerAssignPropertyUsecase.execute({ body });
  }

  @Post('auth/login')
  async login(
    @Body() body: OwnerLoginReqBodyDto,
    @Query() query: OwnerLoginReqQueryDto,
  ) {
    return await this.ownerAuthLoginUsecase.execute({ body, query });
  }

  @Get('complaints/list')
  async listComplaints(@Query() query: OwnerViewComplaintsListReqQueryDto) {
    return await this.ownerComplaintsListUsecase.execute({ query, body: {} });
  }

  @Post('complaints/resolve')
  async resolveComplaint(
    @Body() body: OwnerResolveComplaintsReqBodyDto,
    @Query() query: OwnerResolveComplaintsReqQueryDto,
  ) {
    return await this.ownerComplaintsResolveUsecase.execute({ body, query });
  }

  @Post('payments/collect-payment')
  async collectPayment(
    @Body() body: OwnerPaymentsCollectPaymentReqBodyDto,
    @Query() query: OwnerPaymentsCollectPaymentReqQueryDto,
  ) {
    return await this.ownerPaymentsCollectPaymentUsecase.execute({
      body,
      query,
    });
  }

  @Post('payments/pay')
  async payPayment(
    @Body() body: OwnerPaymentsPayReqBodyDto,
    @Query() query: OwnerPaymentsPayReqQueryDto,
  ) {
    return await this.ownerPaymentsPayUsecase.execute({ body, query });
  }

  @Post('payments/record-payment')
  async recordPayment(
    @Body() body: OwnerPaymentsRecordPaymentReqBodyDto,
    @Query() query: OwnerPaymentsRecordPaymentReqQueryDto,
  ) {
    return await this.ownerPaymentsRecordPaymentUsecase.execute({
      body,
      query,
    });
  }

  @Post('products/apply-for-product')
  async applyForProduct(
    @Body() body: OwnerProductsApplyForProductReqBodyDto,
    @Query() query: OwnerProductsApplyForProductReqQueryDto,
  ) {
    return await this.ownerProductsApplyForProductUsecase.execute({
      body,
      query,
    });
  }

  @Get('products/view-list')
  async viewProductList(@Query() query: OwnerProductsViewListReqQueryDto) {
    return await this.ownerProductsViewListUsecase.execute({ query, body: {} });
  }

  @Post('services/request-service')
  async requestService(
    @Body() body: OwnerServicesRequestServiceReqBodyDto,
    @Query() query: OwnerServicesRequestServiceReqQueryDto,
  ) {
    return await this.ownerServicesRequestServiceUsecase.execute({
      body,
      query,
    });
  }

  @Post('tenancies/create-agreement')
  async createTenancyAgreement(
    @Body() body: OwnerTenanciesCreateAgreementReqBodyDto,
    @Query() query: OwnerTenanciesCreateAgreementReqQueryDto,
  ) {
    return await this.ownerTenanciesCreateAgreementUsecase.execute({
      body,
      query,
    });
  }

  @Post('tenancies/delete-agreement')
  async deleteTenancyAgreement(
    @Body() body: OwnerTenanciesDeleteAgreementReqBodyDto,
    @Query() query: OwnerTenanciesDeleteAgreementReqQueryDto,
  ) {
    return await this.ownerTenanciesDeleteAgreementUsecase.execute({
      body,
      query,
    });
  }

  @Post('tenancies/update-agreements')
  async updateTenancyAgreements(
    @Body() body: OwnerTenanciesUpdateAgreementsReqBodyDto,
    @Query() query: OwnerTenanciesUpdateAgreementsReqQueryDto,
  ) {
    return await this.ownerTenanciesUpdateAgreementsUsecase.execute({
      body,
      query,
    });
  }

  @Post('tenants/create-tenant')
  async createTenant(
    @Body() body: OwnerTenantsCreateTenantReqBodyDto,
    @Query() query: OwnerTenantsCreateTenantReqQueryDto,
  ) {
    return await this.ownerTenantsCreateTenantUsecase.execute({ body, query });
  }

  @Post('tenants/delete-tenant')
  async deleteTenant(
    @Body() body: OwnerTenantsDeleteTenantReqBodyDto,
    @Query() query: OwnerTenantsDeleteTenantReqQueryDto,
  ) {
    return await this.ownerTenantsDeleteTenantUsecase.execute({ body, query });
  }

  @Get('tenants/list-tenants')
  async listTenants(@Query() query: OwnerTenantsListTenantsReqQueryDto) {
    return await this.ownerTenantsListTenantsUsecase.execute({
      query,
      body: {},
    });
  }

  @Post('tenants/send-rent-reminder')
  async sendRentReminder(
    @Body() body: OwnerTenantsSendRentReminderReqBodyDto,
    @Query() query: OwnerTenantsSendRentReminderReqQueryDto,
  ) {
    return await this.ownerTenantsSendRentReminderUsecase.execute({
      body,
      query,
    });
  }

  @Post('tenants/update-tenant')
  async updateTenant(
    @Body() body: OwnerTenantsUpdateTenantReqBodyDto,
    @Query() query: OwnerTenantsUpdateTenantReqQueryDto,
  ) {
    return await this.ownerTenantsUpdateTenantUsecase.execute({ body, query });
  }

  @Post('properties/create-many')
  async createManyProperties(@Body() body: any) {
    return await this.ownerPropertiesCreateManyUsecase.execute(body);
  }

  @Post('properties/pair-with-user')
  async pairPropertiesWithUser(
    @Body() body: OwnerPropertiesPairWithUserReqBodyDto,
    @Query() query: OwnerPropertiesPairWithUserReqQueryDto,
  ) {
    return await this.ownerPropertiesPairWithUserUsecase.execute({
      body,
      query,
    });
  }

  @Post('realtors/connect-with-realtors')
  async connectWithRealtors(
    @Body() body: OwnerRealtorsConnectWithRealtorsReqBodyDto,
    @Query() query: OwnerRealtorsConnectWithRealtorsReqQueryDto,
  ) {
    return await this.ownerRealtorsConnectWithRealtorsUsecase.execute({
      body,
      query,
    });
  }

  @Post('realtors/request-to-represent')
  async requestToRepresent(
    @Body() body: OwnerRealtorsRequestToRepresentReqBodyDto,
    @Query() query: OwnerRealtorsRequestToRepresentReqQueryDto,
  ) {
    return await this.ownerRealtorsRequestToRepresentUsecase.execute({
      body,
      query,
    });
  }

  @Get('realtors/view-list')
  async viewRealtorsList(@Query() query: OwnerRealtorsViewListReqQueryDto) {
    return await this.ownerRealtorsViewListUsecase.execute({ query, body: {} });
  }

  @Get('service-providers/view-list')
  async viewServiceProvidersList(
    @Query() query: OwnerServiceProvidersViewListReqQueryDto,
  ) {
    return await this.ownerServiceProvidersViewListUsecase.execute({
      query,
      body: {},
    });
  }

  @Get('tenancies/list-agreements')
  async listTenancyAgreements(
    @Query() query: OwnerTenanciesListAgreementsReqQueryDto,
  ) {
    return await this.ownerTenanciesListAgreementsUsecase.execute({
      query,
      body: {},
    });
  }

  @Get('listings/view-activity')
  async viewListingActivity(@Query() query: any) {
    return await this.ownerListingsViewActivityUsecase.execute(query);
  }

  @Get('listings/view-list')
  async viewListingList(@Query() query: OwnerListingsViewListReqQueryDto) {
    return await this.ownerListingsViewListUsecase.execute({ query, body: {} });
  }

  @Post('service-providers/apply-for-service')
  async applyForService(
    @Body() body: OwnerServiceProvidersApplyForServiceReqBodyDto,
    @Query() query: OwnerServiceProvidersApplyForServiceReqQueryDto,
  ) {
    return await this.ownerServiceProvidersApplyForServiceUsecase.execute({
      body,
      query,
    });
  }
}
