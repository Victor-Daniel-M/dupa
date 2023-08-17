import { RealtorRegisterUsecase } from 'real-estate/src/application/realtor/register';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
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
  RealtorRegisterDto,
  RealtorRequestToRepresentReqBodyDto,
  RealtorRequestToRepresentReqQueryDto,
  RealtorLoginDto,
  RealtorCreateMessageReqBodyDto,
  RealtorCreateMessageReqQueryDto,
  RealtorViewOwnerRequestListReqQueryDto,
  RealtorConnectWithOwnersReqQueryDto,
  RealtorViewOwnerListReqQueryDto,
  RealtorHandoverPropertyReqBodyDto,
  RealtorHandoverPropertyReqQueryDto,
  RealtorViewPropertyListReqQueryDto,
  RealtorRecordPropertyReqBodyDto,
  RealtorRecordPropertyReqQueryDto,
  RealtorRecordPropertySaleReqBodyDto,
  RealtorRecordPropertySaleReqQueryDto,
  RealtorViewSalesListPropertyReqQueryDto,
  RealtorReactToVisitRequestReqBodyDto,
  RealtorReactToVisitRequestReqQueryDto,
  RealtorViewVisitRequestsReqQueryDto,
} from '../dtos/realtor.controllers.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { RealtorRequestToRepresentUsecase } from '@real-estate/application/realtor/realtor-request-to-represent';
import {
  RealtorConnectWithOwnersUsecase,
  RealtorCreateMessageUsecase,
  RealtorHandoverPropertyUsecase,
  RealtorLoginUsecase,
  RealtorReactToVisitRequestUsecase,
  RealtorRecordPropertySaleUsecase,
  RealtorRecordPropertyUsecase,
  RealtorViewOwnerListUsecase,
  RealtorViewOwnerRequestListUsecase,
  RealtorViewPropertyListUsecase,
  RealtorViewSalesListPropertyUsecase,
  RealtorViewVisitRequestsUsecase,
} from '@real-estate/application/realtor';

@ApiTags('realtor')
@Controller('realtor')
@UseInterceptors(ResponseInterceptor)
export class RealtorController {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorRegisterUsecase)
    private realtorRegisterUsecase: RealtorRegisterUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorRequestToRepresentUsecase)
    private realtorRequestToRepresentUsecase: RealtorRequestToRepresentUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorLoginUsecase)
    private realtorLoginUsecase: RealtorLoginUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorCreateMessageUsecase)
    private realtorCreateMessageUsecase: RealtorCreateMessageUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorViewOwnerRequestListUsecase)
    private realtorViewOwnerRequestListUsecase: RealtorViewOwnerRequestListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorConnectWithOwnersUsecase)
    private realtorConnectWithOwnersUsecase: RealtorConnectWithOwnersUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorViewOwnerListUsecase)
    private realtorViewOwnerListUsecase: RealtorViewOwnerListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorHandoverPropertyUsecase)
    private realtorHandoverPropertyUsecase: RealtorHandoverPropertyUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorViewPropertyListUsecase)
    private realtorViewPropertyListUsecase: RealtorViewPropertyListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorRecordPropertyUsecase)
    private realtorRecordPropertyUsecase: RealtorRecordPropertyUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorRecordPropertySaleUsecase)
    private realtorRecordPropertySaleUsecase: RealtorRecordPropertySaleUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorViewSalesListPropertyUsecase)
    private realtorViewSalesListPropertyUsecase: RealtorViewSalesListPropertyUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorReactToVisitRequestUsecase)
    private realtorReactToVisitRequestUsecase: RealtorReactToVisitRequestUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorViewVisitRequestsUsecase)
    private realtorViewVisitRequestsUsecase: RealtorViewVisitRequestsUsecase,
  ) {}

  @Post('register')
  @UseInterceptors(FilesInterceptor('properties[0][files][]', 2))
  async registerRealtor(
    @Body() body: RealtorRegisterDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return await this.realtorRegisterUsecase.execute({
      body,
      files,
    });
  }

  @Post('requests/apply')
  async realtorApplyToRepresent(
    @Body() body: RealtorRequestToRepresentReqBodyDto,
    @Query() query: RealtorRequestToRepresentReqQueryDto,
  ) {
    return await this.realtorRequestToRepresentUsecase.execute({
      body,
      query,
    });
  }

  @Post('messages-create')
  async createMessage(
    @Body() body: RealtorCreateMessageReqBodyDto,
    @Query() query: RealtorCreateMessageReqQueryDto,
  ) {
    return await this.realtorCreateMessageUsecase.execute({
      body,
      query,
    });
  }

  @Get('owner-requests-list')
  async viewOwnerRequestList(
    @Query() query: RealtorViewOwnerRequestListReqQueryDto,
  ) {
    return await this.realtorViewOwnerRequestListUsecase.execute({
      query,
      body: {},
    });
  }

  @Get('owners-connect')
  async connectWithOwners(@Query() query: RealtorConnectWithOwnersReqQueryDto) {
    return await this.realtorConnectWithOwnersUsecase.execute({
      query,
      body: {},
    });
  }

  @Get('owners-list')
  async viewOwnerList(@Query() query: RealtorViewOwnerListReqQueryDto) {
    return await this.realtorViewOwnerListUsecase.execute({
      query,
      body: {},
    });
  }

  @Post('properties-handover')
  async handoverProperty(
    @Body() body: RealtorHandoverPropertyReqBodyDto,
    @Query() query: RealtorHandoverPropertyReqQueryDto,
  ) {
    return await this.realtorHandoverPropertyUsecase.execute({
      body,
      query,
    });
  }

  @Get('properties-list')
  async viewPropertyList(@Query() query: RealtorViewPropertyListReqQueryDto) {
    return await this.realtorViewPropertyListUsecase.execute({
      query,
      body: {},
    });
  }

  @Post('properties-record')
  async recordProperty(
    @Body() body: RealtorRecordPropertyReqBodyDto,
    @Query() query: RealtorRecordPropertyReqQueryDto,
  ) {
    return await this.realtorRecordPropertyUsecase.execute({
      body,
      query,
    });
  }

  @Post('realtor-request-to-represent')
  async requestToRepresent(
    @Body() body: RealtorRequestToRepresentReqBodyDto,
    @Query() query: RealtorRequestToRepresentReqQueryDto,
  ) {
    return await this.realtorRequestToRepresentUsecase.execute({
      body,
      query,
    });
  }

  @Post('visit-requests-react')
  async reactToVisitRequest(
    @Body() body: RealtorReactToVisitRequestReqBodyDto,
    @Query() query: RealtorReactToVisitRequestReqQueryDto,
  ) {
    return await this.realtorReactToVisitRequestUsecase.execute({
      body,
      query,
    });
  }

  @Get('visit-requests-list')
  async viewVisitRequestsList(
    @Query() query: RealtorViewVisitRequestsReqQueryDto,
  ) {
    return await this.realtorViewVisitRequestsUsecase.execute({
      query,
      body: {},
    });
  }
}
