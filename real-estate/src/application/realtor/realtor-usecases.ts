import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  RealtorLoginUsecase,
  RealtorCreateMessageUsecase,
  RealtorViewOwnerRequestListUsecase,
  RealtorConnectWithOwnersUsecase,
  RealtorViewOwnerListUsecase,
  RealtorHandoverPropertyUsecase,
  RealtorViewPropertyListUsecase,
  RealtorRecordPropertyUsecase,
  RealtorRequestToRepresentUsecase,
  RealtorRegisterUsecase,
  RealtorRecordPropertySaleUsecase,
  RealtorViewSalesListPropertyUsecase,
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

const realtorHandoverPropertyUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorHandoverPropertyUsecase,
  useClass: RealtorHandoverPropertyUsecase,
};

const realtorViewPropertyListUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorViewPropertyListUsecase,
  useClass: RealtorViewPropertyListUsecase,
};

const realtorRecordPropertyUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRecordPropertyUsecase,
  useClass: RealtorRecordPropertyUsecase,
};

const realtorRequestToRepresentUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRequestToRepresentUsecase,
  useClass: RealtorRequestToRepresentUsecase,
};

const realtorRegisterUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRegisterUsecase,
  useClass: RealtorRegisterUsecase,
};

const realtorRecordPropertySaleUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRecordPropertySaleUsecase,
  useClass: RealtorRecordPropertySaleUsecase,
};

const realtorViewSalesListPropertyUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorViewSalesListPropertyUsecase,
  useClass: RealtorViewSalesListPropertyUsecase,
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
  realtorHandoverPropertyUsecase,
  realtorViewPropertyListUsecase,
  realtorRecordPropertyUsecase,
  realtorRequestToRepresentUsecase,
  realtorRegisterUsecase,
  realtorRecordPropertySaleUsecase,
  realtorViewSalesListPropertyUsecase,
  realtorReactToVisitRequestUsecase,
  realtorViewVisitRequestsUsecase,
  realtorCreateScheduleUsecase,
];
