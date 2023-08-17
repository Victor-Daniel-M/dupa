import { IsEmail, IsNotEmpty } from 'class-validator';

export class SearcherRegisterReqBodyDto {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
export class SearcherRegisterReqQueryDto {}

export class SearcherLoginReqBodyDto {
  email: string;
  password: string;
}

export class SearcherLoginReqQueryDto {}

// Searcher book
export class SearcherListingsBookReqBodyDto {}
export class SearcherListingsBookReqQueryDto {}

// Searcher search for listings
export class SearcherListingsSearchReqBodyDto {}
export class SearcherListingsSearchReqQueryDto {}

// Searcher view liastings
export class SearcherViewListingReqBodyDto {}
export class SearcherViewListingReqQueryDto {}

// searcher make payment
export class SearcherMakePaymentReqBodyDto {}
export class SearcherMakePaymentReqQueryDto {}

// Create message
export class SearcherCreateMessageReqBodyDto {}
export class SearcherCreateMessageReqQueryDto {}

// searcher connect with realtors
export class SearcherRealtorsConnectReqBodyDto {}
export class SearcherRealtorsConnectReqQueryDto {}

// searcher view with realtors
export class SearcherViewRealtorsListReqBodyDto {}
export class SearcherViewRealtorsListReqQueryDto {}

// searcher request visit
export class SearcherRequestVisitReqBodyDto {}
export class SearcherRequestVisitReqQueryDto {}

// searcher request visit
export class SearcherCancelVisitReqBodyDto {}
export class SearcherCancelVisitReqQueryDto {}
