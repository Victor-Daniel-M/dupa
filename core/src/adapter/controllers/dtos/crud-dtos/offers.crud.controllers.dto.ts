import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Offers schemas **//

export const OffersGetSchema = z.object({});

export const OffersDeleteSchema = z.object({
  id: z.string(),
});

export const OffersViewSchema = z.object({
  id: z.string(),
});

export const OffersUpdateSchema = z.object({
  id: string(),
  fromEntityId: string(),
  fromEntityName: string(),
  onEntityId: string(),
  onEntityName: string(),
  createdAt: string(),
  updatedAt: string()
});

export const OffersCreateSchema = z.object({
  id: string(),
  fromEntityId: string(),
  fromEntityName: string(),
  onEntityId: string(),
  onEntityName: string(),
  createdAt: string(),
  updatedAt: string()
});

export class OffersGetDto extends createZodDto(OffersGetSchema) {}
export class OffersDeleteDto extends createZodDto(OffersDeleteSchema) {}
export class OffersViewDto extends createZodDto(OffersViewSchema) {}
export class OffersUpdateDto extends createZodDto(OffersUpdateSchema) {}
export class OffersCreateDto extends createZodDto(OffersCreateSchema) {}