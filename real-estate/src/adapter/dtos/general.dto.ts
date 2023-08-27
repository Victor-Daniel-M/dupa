import { ApplicationType, ReactionType } from '@db/domain/entities';

export class OfferingCreateDto {
  cost: number;
  description: string;
  openDate: string;
  title: string;
  offeringCategoryId: number;
}

export class OfferingsCreateManyDto {
  offerings: OfferingCreateDto[];
  businessId: number;
}

export class ReactionDto {
  fromEntityId: number;
  fromEntityName: string;
  toEntityId: number;
  toEntityName: string;
  text?: string;
  reactionType: ReactionType;
}

export class ApplicationDto {
  userId: number;
  applicationType: ApplicationType;
  refEntityId: number;
  refEntityName: string;
}

export class MessageDto {
  text: string;
  mediaType: string;
  mediaValue: string;
  fromEntityId: number;
  fromEntityName: string;
  toEntityId: number;
  toEntityName: string;
}
