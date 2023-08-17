import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  SystemCommissionsSplitCommissionUsecase,
  SystemNotificationsSendNotificationUsecase,
  SystemPaymentsProcessPaymentUsecase,
} from './index'; // Update the path

const commissionsSplitCommissionUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SystemCommissionsSplitCommissionUsecase,
  useClass: SystemCommissionsSplitCommissionUsecase,
};

const notificationsSendNotificationUsecase = {
  provide:
    REAL_ESTATE_TYPES.useCases.SystemNotificationsSendNotificationUsecase,
  useClass: SystemNotificationsSendNotificationUsecase,
};

const paymentsProcessPaymentUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SystemPaymentsProcessPaymentUsecase,
  useClass: SystemPaymentsProcessPaymentUsecase,
};

export const systemUsecaseProviders = [
  commissionsSplitCommissionUsecase,
  notificationsSendNotificationUsecase,
  paymentsProcessPaymentUsecase,
];
