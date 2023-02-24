import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** OfferMetas schemas **//

export const OfferMetasGetSchema = z.object({});

export const OfferMetasDeleteSchema = z.object({
  id: z.string(),
});

export const OfferMetasViewSchema = z.object({
  id: z.string(),
});

export const OfferMetasUpdateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  offerId: string(),
  valueType: string()
});

export const OfferMetasCreateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  offerId: string(),
  valueType: string()
});

export class OfferMetasGetDto extends createZodDto(OfferMetasGetSchema) {}
export class OfferMetasDeleteDto extends createZodDto(OfferMetasDeleteSchema) {}
export class OfferMetasViewDto extends createZodDto(OfferMetasViewSchema) {}
export class OfferMetasUpdateDto extends createZodDto(OfferMetasUpdateSchema) {}
export class OfferMetasCreateDto extends createZodDto(OfferMetasCreateSchema) {}