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
  RealtorHandoverOfferingReqBodyDto,
  RealtorHandoverOfferingReqQueryDto,
  RealtorViewOfferingListReqQueryDto,
  RealtorRecordOfferingReqBodyDto,
  RealtorRecordOfferingReqQueryDto,
  RealtorRecordOfferingSaleReqBodyDto,
  RealtorRecordOfferingSaleReqQueryDto,
  RealtorViewSalesListOfferingReqQueryDto,
  RealtorReactToVisitRequestReqBodyDto,
  RealtorReactToVisitRequestReqQueryDto,
  RealtorViewVisitRequestsReqQueryDto,
  RealtorCreateScheduleReqBodyDto,
  RealtorCreateScheduleReqQueryDto,
} from '../dtos/realtor.controllers.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { RealtorRequestToRepresentUsecase } from '@real-estate/application/realtor/realtor-request-to-represent';
import {
  RealtorConnectWithOwnersUsecase,
  RealtorCreateMessageUsecase,
  RealtorHandoverOfferingUsecase,
  RealtorLoginUsecase,
  RealtorReactToVisitRequestUsecase,
  RealtorRecordOfferingSaleUsecase,
  RealtorRecordOfferingUsecase,
  RealtorViewOwnerListUsecase,
  RealtorViewOwnerRequestListUsecase,
  RealtorViewOfferingListUsecase,
  RealtorViewSalesListOfferingUsecase,
  RealtorViewVisitRequestsUsecase,
} from '@real-estate/application/realtor';
import { RealtorCreateScheduleUsecase } from '@real-estate/application/realtor/schedules-create';

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
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorHandoverOfferingUsecase)
    private realtorHandoverOfferingUsecase: RealtorHandoverOfferingUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorViewOfferingListUsecase)
    private realtorViewOfferingListUsecase: RealtorViewOfferingListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorRecordOfferingUsecase)
    private realtorRecordOfferingUsecase: RealtorRecordOfferingUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorRecordOfferingSaleUsecase)
    private realtorRecordOfferingSaleUsecase: RealtorRecordOfferingSaleUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorViewSalesListOfferingUsecase)
    private realtorViewSalesListOfferingUsecase: RealtorViewSalesListOfferingUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorReactToVisitRequestUsecase)
    private realtorReactToVisitRequestUsecase: RealtorReactToVisitRequestUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorViewVisitRequestsUsecase)
    private realtorViewVisitRequestsUsecase: RealtorViewVisitRequestsUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.RealtorCreateScheduleUsecase)
    private realtorCreateScheduleUsecase: RealtorCreateScheduleUsecase,
  ) {}

  @Post('register')
  @UseInterceptors(FilesInterceptor('offerings[0][files][]', 2))
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

  @Post('schedules/create')
  async createSchedule(
    @Body() body: RealtorCreateScheduleReqBodyDto,
    @Query() query: RealtorCreateScheduleReqQueryDto,
  ) {
    return await this.realtorCreateScheduleUsecase.execute({
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

  @Post('offerings-handover')
  async handoverOffering(
    @Body() body: RealtorHandoverOfferingReqBodyDto,
    @Query() query: RealtorHandoverOfferingReqQueryDto,
  ) {
    return await this.realtorHandoverOfferingUsecase.execute({
      body,
      query,
    });
  }

  @Get('offerings-list')
  async viewOfferingList(@Query() query: RealtorViewOfferingListReqQueryDto) {
    return await this.realtorViewOfferingListUsecase.execute({
      query,
      body: {},
    });
  }

  @Post('offerings-record')
  async recordOffering(
    @Body() body: RealtorRecordOfferingReqBodyDto,
    @Query() query: RealtorRecordOfferingReqQueryDto,
  ) {
    return await this.realtorRecordOfferingUsecase.execute({
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
