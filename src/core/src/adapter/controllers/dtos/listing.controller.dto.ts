import { UserTypes } from '../../../domain/entities/user';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const RecordListingByBrokerSchema = z.object({
  coverImage: z.string(),
  openDate: z.string(),
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  propertyCategoryId: z.string(),
});

// class is required for using DTO as a type
export class RecordListingByBrokerDTO extends createZodDto(
  RecordListingByBrokerSchema,
) {}
