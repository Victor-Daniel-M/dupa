import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** ChargeTypes schemas **//

export const ChargeTypesGetSchema = z.object({});

export const ChargeTypesDeleteSchema = z.object({
  id: z.string(),
});

export const ChargeTypesViewSchema = z.object({
  id: z.string(),
});

export const ChargeTypesUpdateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export const ChargeTypesCreateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export class ChargeTypesGetDto extends createZodDto(ChargeTypesGetSchema) {}
export class ChargeTypesDeleteDto extends createZodDto(ChargeTypesDeleteSchema) {}
export class ChargeTypesViewDto extends createZodDto(ChargeTypesViewSchema) {}
export class ChargeTypesUpdateDto extends createZodDto(ChargeTypesUpdateSchema) {}
export class ChargeTypesCreateDto extends createZodDto(ChargeTypesCreateSchema) {}