import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** RequestMetas schemas **//

export const RequestMetasGetSchema = z.object({});

export const RequestMetasDeleteSchema = z.object({
  id: z.string(),
});

export const RequestMetasViewSchema = z.object({
  id: z.string(),
});

export const RequestMetasUpdateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  requestId: string(),
  valueType: string()
});

export const RequestMetasCreateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  requestId: string(),
  valueType: string()
});

export class RequestMetasGetDto extends createZodDto(RequestMetasGetSchema) {}
export class RequestMetasDeleteDto extends createZodDto(RequestMetasDeleteSchema) {}
export class RequestMetasViewDto extends createZodDto(RequestMetasViewSchema) {}
export class RequestMetasUpdateDto extends createZodDto(RequestMetasUpdateSchema) {}
export class RequestMetasCreateDto extends createZodDto(RequestMetasCreateSchema) {}