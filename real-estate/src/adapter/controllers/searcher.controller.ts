import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  SearcherListingsBookUsecase,
  SearcherListingsSearchUsecase,
  SearcherViewListingViewUsecase,
  SearcherCreateMessageUsecase,
  SearcherMakePaymentUsecase,
  SearcherRealtorsConnectUsecase,
  SearcherViewRealtorsListUsecase,
  SearcherRequestVisitUsecase,
  SearcherCancelVisitUsecase,
} from '../../application/searcher'; // Update the path

import {
  SearcherListingsBookReqBodyDto,
  SearcherListingsBookReqQueryDto,
  SearcherListingsSearchReqBodyDto,
  SearcherListingsSearchReqQueryDto,
  SearcherViewListingReqBodyDto,
  SearcherViewListingReqQueryDto,
  SearcherCreateMessageReqBodyDto,
  SearcherCreateMessageReqQueryDto,
  SearcherMakePaymentReqBodyDto,
  SearcherMakePaymentReqQueryDto,
  SearcherRealtorsConnectReqBodyDto,
  SearcherRealtorsConnectReqQueryDto,
  SearcherViewRealtorsListReqBodyDto,
  SearcherViewRealtorsListReqQueryDto,
  SearcherRequestVisitReqBodyDto,
  SearcherRequestVisitReqQueryDto,
  SearcherCancelVisitReqBodyDto,
  SearcherCancelVisitReqQueryDto,
  SearcherRegisterReqBodyDto,
  SearcherRegisterReqQueryDto,
  SearcherLoginReqBodyDto,
  SearcherLoginReqQueryDto,
  SearcherReactionsCreateReqBodyDto,
  SearcherReactionsCreateReqQueryDto,
  SearcherCreateScheduleApplicationReqBodyDto,
  SearcherCreateScheduleApplicationReqQueryDto,
  SearcherViewTenancyAgreementReqBodyDto,
  SearcherViewTenancyAgreementReqQueryDto,
  SearcherAcceptTenancyAgreementReqBodyDto,
  SearcherAcceptTenancyAgreementReqQueryDto,
} from '../dtos/searcher.controllers.dto';
import {
  SearcherLoginUsecase,
  SearcherRegisterUsecase,
} from '@real-estate/application/searcher';
import { SearcherViewListingListUsecase } from '@real-estate/application/searcher/listings-list';
import { SearcherReactionsCreateUsecase } from '@real-estate/application/searcher/reactions-create';
import { SearcherCreateScheduleApplicationUsecase } from '@real-estate/application/searcher/schedule-applications-create';
import { SearcherViewTenancyAgreementUsecase } from '@real-estate/application/searcher/agreements-view-agreement';
import { SearcherAcceptTenancyAgreementUsecase } from '@real-estate/application/searcher/agreements-accept-agreement';

@ApiTags('searcher')
@Controller('searcher')
@UseInterceptors(ResponseInterceptor)
export class SearcherController {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherRegisterUsecase)
    private searcherRegisterUsecase: SearcherRegisterUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherLoginUsecase)
    private searcherLoginUsecase: SearcherLoginUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherListingsBookUsecase)
    private searcherListingsBookUsecase: SearcherListingsBookUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherListingsSearchUsecase)
    private searcherListingsSearchUsecase: SearcherListingsSearchUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherViewListingViewUsecase)
    private searcherViewListingViewUsecase: SearcherViewListingViewUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherViewListingListUsecase)
    private searcherViewListingListUsecase: SearcherViewListingListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherCreateMessageUsecase)
    private searcherCreateMessageUsecase: SearcherCreateMessageUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherReactionsCreateUsecase)
    private searcherReactionsCreateUsecase: SearcherReactionsCreateUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherMakePaymentUsecase)
    private searcherMakePaymentUsecase: SearcherMakePaymentUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherRealtorsConnectUsecase)
    private searcherRealtorsConnectUsecase: SearcherRealtorsConnectUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherViewRealtorsListUsecase)
    private searcherViewRealtorsListUsecase: SearcherViewRealtorsListUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherRequestVisitUsecase)
    private searcherRequestVisitUsecase: SearcherRequestVisitUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherCancelVisitUsecase)
    private searcherCancelVisitUsecase: SearcherCancelVisitUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherCreateScheduleApplicationUsecase)
    private searcherCreateScheduleApplicationUsecase: SearcherCreateScheduleApplicationUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherViewTenancyAgreementUsecase)
    private searcherViewTenancyAgreementUsecase: SearcherViewTenancyAgreementUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.SearcherAcceptTenancyAgreementUsecase)
    private searcherAcceptTenancyAgreementUsecase: SearcherAcceptTenancyAgreementUsecase,
  ) {}

  @Post('register')
  async register(
    @Body() body: SearcherRegisterReqBodyDto,
    @Query() query: SearcherRegisterReqQueryDto,
  ) {
    return await this.searcherRegisterUsecase.execute({
      body,
      query,
    });
  }

  @Post('login')
  async login(
    @Body() body: SearcherLoginReqBodyDto,
    @Query() query: SearcherLoginReqQueryDto,
  ) {
    return await this.searcherLoginUsecase.execute({
      body,
      query,
    });
  }

  @Post('listings/book')
  async listingsBook(
    @Body() body: SearcherListingsBookReqBodyDto,
    @Query() query: SearcherListingsBookReqQueryDto,
  ) {
    return await this.searcherListingsBookUsecase.execute({
      body,
      query,
    });
  }

  @Post('listings/search')
  async listingsSearch(
    @Body() body: SearcherListingsSearchReqBodyDto,
    @Query() query: SearcherListingsSearchReqQueryDto,
  ) {
    return await this.searcherListingsSearchUsecase.execute({
      body,
      query,
    });
  }

  @Post('listings/view')
  async listingsView(
    @Body() body: SearcherViewListingReqBodyDto,
    @Query() query: SearcherViewListingReqQueryDto,
  ) {
    return await this.searcherViewListingViewUsecase.execute({
      body,
      query,
    });
  }

  @Get('listings/list')
  async listingsList(
    @Body() body: SearcherViewListingReqBodyDto,
    @Query() query: SearcherViewListingReqQueryDto,
  ) {
    return await this.searcherViewListingListUsecase.execute({
      body,
      query,
    });
  }

  @Get('agreements/get-one')
  async viewAgreement(
    @Body() body: SearcherViewTenancyAgreementReqBodyDto,
    @Query() query: SearcherViewTenancyAgreementReqQueryDto,
  ) {
    return await this.searcherViewTenancyAgreementUsecase.execute({
      body,
      query,
    });
  }

  @Post('agreements/accept')
  async updateAgreement(
    @Body() body: SearcherAcceptTenancyAgreementReqBodyDto,
    @Query() query: SearcherAcceptTenancyAgreementReqQueryDto,
  ) {
    return await this.searcherAcceptTenancyAgreementUsecase.execute({
      body,
      query,
    });
  }

  @Post('messages/create')
  async createMessage(
    @Body() body: SearcherCreateMessageReqBodyDto,
    @Query() query: SearcherCreateMessageReqQueryDto,
  ) {
    return await this.searcherCreateMessageUsecase.execute({
      body,
      query,
    });
  }

  @Post('reactions/create')
  async createReaction(
    @Body() body: SearcherReactionsCreateReqBodyDto,
    @Query() query: SearcherReactionsCreateReqQueryDto,
  ) {
    return await this.searcherReactionsCreateUsecase.execute({
      body,
      query,
    });
  }

  @Post('schedules/applications/create')
  async createApplicationForSchedule(
    @Body() body: SearcherCreateScheduleApplicationReqBodyDto,
    @Query() query: SearcherCreateScheduleApplicationReqQueryDto,
  ) {
    return await this.searcherCreateScheduleApplicationUsecase.execute({
      body,
      query,
    });
  }

  @Post('payments/make')
  async makePayment(
    @Body() body: SearcherMakePaymentReqBodyDto,
    @Query() query: SearcherMakePaymentReqQueryDto,
  ) {
    return await this.searcherMakePaymentUsecase.execute({
      body,
      query,
    });
  }

  @Post('realtors/connect')
  async connectWithRealtors(
    @Body() body: SearcherRealtorsConnectReqBodyDto,
    @Query() query: SearcherRealtorsConnectReqQueryDto,
  ) {
    return await this.searcherRealtorsConnectUsecase.execute({
      body,
      query,
    });
  }

  @Post('realtors/list')
  async viewRealtorsList(
    @Body() body: SearcherViewRealtorsListReqBodyDto,
    @Query() query: SearcherViewRealtorsListReqQueryDto,
  ) {
    return await this.searcherViewRealtorsListUsecase.execute({
      body,
      query,
    });
  }

  @Post('realtors/request')
  async requestRealtor(
    @Body() body: SearcherRequestVisitReqBodyDto,
    @Query() query: SearcherRequestVisitReqQueryDto,
  ) {
    return await this.searcherRequestVisitUsecase.execute({
      body,
      query,
    });
  }

  @Post('visits/cancel')
  async cancelVisit(
    @Body() body: SearcherCancelVisitReqBodyDto,
    @Query() query: SearcherCancelVisitReqQueryDto,
  ) {
    return await this.searcherCancelVisitUsecase.execute({
      body,
      query,
    });
  }
}
