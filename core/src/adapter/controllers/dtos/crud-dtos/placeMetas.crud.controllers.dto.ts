import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** PlaceMetas schemas **//

export const PlaceMetasGetSchema = z.object({});

export const PlaceMetasDeleteSchema = z.object({
  id: z.string(),
});

export const PlaceMetasViewSchema = z.object({
  id: z.string(),
});

export const PlaceMetasUpdateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  placeId: string(),
  valueType: string()
});

export const PlaceMetasCreateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  placeId: string(),
  valueType: string()
});

export class PlaceMetasGetDto extends createZodDto(PlaceMetasGetSchema) {}
export class PlaceMetasDeleteDto extends createZodDto(PlaceMetasDeleteSchema) {}
export class PlaceMetasViewDto extends createZodDto(PlaceMetasViewSchema) {}
export class PlaceMetasUpdateDto extends createZodDto(PlaceMetasUpdateSchema) {}
export class PlaceMetasCreateDto extends createZodDto(PlaceMetasCreateSchema) {}