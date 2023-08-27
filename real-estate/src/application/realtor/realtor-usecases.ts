import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  RealtorLoginUsecase,
  RealtorCreateMessageUsecase,
  RealtorViewOwnerRequestListUsecase,
  RealtorConnectWithOwnersUsecase,
  RealtorViewOwnerListUsecase,
  RealtorHandoverOfferingUsecase,
  RealtorViewOfferingListUsecase,
  RealtorRecordOfferingUsecase,
  RealtorRequestToRepresentUsecase,
  RealtorRegisterUsecase,
  RealtorRecordOfferingSaleUsecase,
  RealtorViewSalesListOfferingUsecase,
  RealtorReactToVisitRequestUsecase,
  RealtorViewVisitRequestsUsecase,
} from './index';
import { RealtorCreateScheduleUsecase } from './schedules-create';

const realtorLoginUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorLoginUsecase,
  useClass: RealtorLoginUsecase,
};

const realtorCreateMessageUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorCreateMessageUsecase,
  useClass: RealtorCreateMessageUsecase,
};

const realtorViewOwnerRequestListUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorViewOwnerRequestListUsecase,
  useClass: RealtorViewOwnerRequestListUsecase,
};

const realtorConnectWithOwnersUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorConnectWithOwnersUsecase,
  useClass: RealtorConnectWithOwnersUsecase,
};

const realtorViewOwnerListUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorViewOwnerListUsecase,
  useClass: RealtorViewOwnerListUsecase,
};

const realtorHandoverOfferingUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorHandoverOfferingUsecase,
  useClass: RealtorHandoverOfferingUsecase,
};

const realtorViewOfferingListUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorViewOfferingListUsecase,
  useClass: RealtorViewOfferingListUsecase,
};

const realtorRecordOfferingUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRecordOfferingUsecase,
  useClass: RealtorRecordOfferingUsecase,
};

const realtorRequestToRepresentUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRequestToRepresentUsecase,
  useClass: RealtorRequestToRepresentUsecase,
};

const realtorRegisterUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRegisterUsecase,
  useClass: RealtorRegisterUsecase,
};

const realtorRecordOfferingSaleUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRecordOfferingSaleUsecase,
  useClass: RealtorRecordOfferingSaleUsecase,
};

const realtorViewSalesListOfferingUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorViewSalesListOfferingUsecase,
  useClass: RealtorViewSalesListOfferingUsecase,
};

const realtorReactToVisitRequestUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorReactToVisitRequestUsecase,
  useClass: RealtorReactToVisitRequestUsecase,
};

const realtorViewVisitRequestsUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorViewVisitRequestsUsecase,
  useClass: RealtorViewVisitRequestsUsecase,
};

const realtorCreateScheduleUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorCreateScheduleUsecase,
  useClass: RealtorCreateScheduleUsecase,
};

export const realtorUsecaseProviders = [
  realtorLoginUsecase,
  realtorCreateMessageUsecase,
  realtorViewOwnerRequestListUsecase,
  realtorConnectWithOwnersUsecase,
  realtorViewOwnerListUsecase,
  realtorHandoverOfferingUsecase,
  realtorViewOfferingListUsecase,
  realtorRecordOfferingUsecase,
  realtorRequestToRepresentUsecase,
  realtorRegisterUsecase,
  realtorRecordOfferingSaleUsecase,
  realtorViewSalesListOfferingUsecase,
  realtorReactToVisitRequestUsecase,
  realtorViewVisitRequestsUsecase,
  realtorCreateScheduleUsecase,
];
