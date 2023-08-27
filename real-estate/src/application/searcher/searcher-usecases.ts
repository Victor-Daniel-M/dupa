import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  SearcherListingsBookUsecase,
  SearcherListingsSearchUsecase,
  SearcherViewListingViewUsecase,
  SearcherLoginUsecase,
  SearcherCreateMessageUsecase,
  SearcherMakePaymentUsecase,
  SearcherRealtorsConnectUsecase,
  SearcherViewRealtorsListUsecase,
  SearcherRequestVisitUsecase,
  SearcherRegisterUsecase,
  SearcherCancelVisitUsecase,
} from './index'; // Update the path
import { SearcherViewListingListUsecase } from './listings-list';
import { SearcherReactionsCreateUsecase } from './reactions-create';
import { SearcherCreateScheduleApplicationUsecase } from './schedule-applications-create';
import { SearcherViewTenancyAgreementUsecase } from './agreements-view-agreement';
import { SearcherAcceptTenancyAgreementUsecase } from './agreements-accept-agreement';

const searcherListingsBookUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherListingsBookUsecase,
  useClass: SearcherListingsBookUsecase,
};

const searcherListingsSearchUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherListingsSearchUsecase,
  useClass: SearcherListingsSearchUsecase,
};

const searcherViewListingViewUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherViewListingViewUsecase,
  useClass: SearcherViewListingViewUsecase,
};

const searcherLoginUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherLoginUsecase,
  useClass: SearcherLoginUsecase,
};

const searcherCreateMessageUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherCreateMessageUsecase,
  useClass: SearcherCreateMessageUsecase,
};

const searcherMakePaymentUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherMakePaymentUsecase,
  useClass: SearcherMakePaymentUsecase,
};

const searcherRealtorsConnectUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherRealtorsConnectUsecase,
  useClass: SearcherRealtorsConnectUsecase,
};

const searcherViewRealtorsListUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherViewRealtorsListUsecase,
  useClass: SearcherViewRealtorsListUsecase,
};

const searcherRequestVisitUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherRequestVisitUsecase,
  useClass: SearcherRequestVisitUsecase,
};

const searcherRegisterUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherRegisterUsecase,
  useClass: SearcherRegisterUsecase,
};

const searcherCancelVisitUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherCancelVisitUsecase,
  useClass: SearcherCancelVisitUsecase,
};

const searcherViewListingListUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherViewListingListUsecase,
  useClass: SearcherViewListingListUsecase,
};

const searcherReactionsCreateUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherReactionsCreateUsecase,
  useClass: SearcherReactionsCreateUsecase,
};

const searcherCreateScheduleApplicationUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherCreateScheduleApplicationUsecase,
  useClass: SearcherCreateScheduleApplicationUsecase,
};

const searcherViewTenancyAgreementUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherViewTenancyAgreementUsecase,
  useClass: SearcherViewTenancyAgreementUsecase,
};

const searcherAcceptTenancyAgreementUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherAcceptTenancyAgreementUsecase,
  useClass: SearcherAcceptTenancyAgreementUsecase,
};

export const searcherUsecaseProviders = [
  searcherListingsBookUsecase,
  searcherListingsSearchUsecase,
  searcherViewListingViewUsecase,
  searcherLoginUsecase,
  searcherCreateMessageUsecase,
  searcherMakePaymentUsecase,
  searcherRealtorsConnectUsecase,
  searcherViewRealtorsListUsecase,
  searcherRequestVisitUsecase,
  searcherRegisterUsecase,
  searcherCancelVisitUsecase,
  searcherViewListingListUsecase,
  searcherReactionsCreateUsecase,
  searcherCreateScheduleApplicationUsecase,
  searcherViewTenancyAgreementUsecase,
  searcherAcceptTenancyAgreementUsecase,
];
