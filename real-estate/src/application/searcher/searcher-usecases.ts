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
];
