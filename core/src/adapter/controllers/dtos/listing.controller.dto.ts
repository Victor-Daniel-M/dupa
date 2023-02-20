import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

// RECORD LISTING SCHEMA
export const RecordListingByBrokerSchema = z.object({
  coverImage: z.string(),
  openDate: z.string(),
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  propertyCategoryId: z.string(),
  description: z.string(),
  title: z.string(),
  cost: z.number(),
  propertyMeta: z.array(
    z.object({
      propertyMetaCategoryId: z.string(),
      parentId: z.string().nullable(),
      value: z.string(),
      key: z.string(),
    }),
  ),
});

export class RecordListingByBrokerDTO extends createZodDto(
  RecordListingByBrokerSchema,
) {}

// SEARCH LISTING SCHEMA
export const SearchListingSchema = z.object({
  coverImage: z.string().optional(),
  openDate: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  propertyCategoryId: z.string().optional(),
});

export class SearchListingDTO extends createZodDto(SearchListingSchema) {}
