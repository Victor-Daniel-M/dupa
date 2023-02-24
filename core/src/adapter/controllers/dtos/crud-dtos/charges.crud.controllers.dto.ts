import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Charges schemas **//

export const ChargesGetSchema = z.object({});

export const ChargesDeleteSchema = z.object({
  id: z.string(),
});

export const ChargesViewSchema = z.object({
  id: z.string(),
});

export const ChargesUpdateSchema = z.object({
  id: string(),
  value: string(),
  lowerLimit: string(),
  upperLimit: string(),
  createdAt: string(),
  updatedAt: string(),
  propertyId: string(),
  chargeTypeId: string(),
  valueType: string()
});

export const ChargesCreateSchema = z.object({
  id: string(),
  value: string(),
  lowerLimit: string(),
  upperLimit: string(),
  createdAt: string(),
  updatedAt: string(),
  propertyId: string(),
  chargeTypeId: string(),
  valueType: string()
});

export class ChargesGetDto extends createZodDto(ChargesGetSchema) {}
export class ChargesDeleteDto extends createZodDto(ChargesDeleteSchema) {}
export class ChargesViewDto extends createZodDto(ChargesViewSchema) {}
export class ChargesUpdateDto extends createZodDto(ChargesUpdateSchema) {}
export class ChargesCreateDto extends createZodDto(ChargesCreateSchema) {}