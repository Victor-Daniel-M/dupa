import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** RequestUsers schemas **//

export const RequestUsersGetSchema = z.object({});

export const RequestUsersDeleteSchema = z.object({
  id: z.string(),
});

export const RequestUsersViewSchema = z.object({
  id: z.string(),
});

export const RequestUsersUpdateSchema = z.object({
  id: string(),
  userId: string(),
  requestId: string()
});

export const RequestUsersCreateSchema = z.object({
  id: string(),
  userId: string(),
  requestId: string()
});

export class RequestUsersGetDto extends createZodDto(RequestUsersGetSchema) {}
export class RequestUsersDeleteDto extends createZodDto(RequestUsersDeleteSchema) {}
export class RequestUsersViewDto extends createZodDto(RequestUsersViewSchema) {}
export class RequestUsersUpdateDto extends createZodDto(RequestUsersUpdateSchema) {}
export class RequestUsersCreateDto extends createZodDto(RequestUsersCreateSchema) {}