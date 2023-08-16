import { ApplicationType, ReactionType } from '@db/domain/entities';

export class PropertyCreateDto {
  cost: number;
  description: string;
  openDate: string;
  title: string;
  propertyCategoryId: number;
}

export class PropertiesCreateManyDto {
  properties: PropertyCreateDto[];
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
