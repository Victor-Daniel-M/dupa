import { ApplicationType, ReactionType } from '@db/domain/entities';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApplicationDto, MessageDto, ReactionDto } from './general.dto';

// commissions split commission
export class SystemCommissionsSplitCommissionReqBodyDto {}
export class SystemCommissionsSplitCommissionReqQueryDto {}

// notifications send notification
export class SystemNotificationsSendNotificationReqBodyDto {}
export class SystemNotificationsSendNotificationReqQueryDto {}

// payments process payment
export class SystemPaymentsProcessPaymentReqBodyDto {}
export class SystemPaymentsProcessPaymentReqQueryDto {}
