import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Requests schemas **//

export const RequestsGetSchema = z.object({});

export const RequestsDeleteSchema = z.object({
  id: z.string(),
});

export const RequestsViewSchema = z.object({
  id: z.string(),
});

export const RequestsUpdateSchema = z.object({
  id: string(),
  fromEntityId: string(),
  fromEntityName: string(),
  onEntityId: string(),
  onEntityName: string(),
  message: string(),
  createdAt: string(),
  updatedAt: string(),
  status: string(),
  requestType: string()
});

export const RequestsCreateSchema = z.object({
  id: string(),
  fromEntityId: string(),
  fromEntityName: string(),
  onEntityId: string(),
  onEntityName: string(),
  message: string(),
  createdAt: string(),
  updatedAt: string(),
  status: string(),
  requestType: string()
});

export class RequestsGetDto extends createZodDto(RequestsGetSchema) {}
export class RequestsDeleteDto extends createZodDto(RequestsDeleteSchema) {}
export class RequestsViewDto extends createZodDto(RequestsViewSchema) {}
export class RequestsUpdateDto extends createZodDto(RequestsUpdateSchema) {}
export class RequestsCreateDto extends createZodDto(RequestsCreateSchema) {}