import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Permissions schemas **//

export const PermissionsGetSchema = z.object({});

export const PermissionsDeleteSchema = z.object({
  id: z.string(),
});

export const PermissionsViewSchema = z.object({
  id: z.string(),
});

export const PermissionsUpdateSchema = z.object({
  id: string(),
  entityId: string(),
  entityName: string(),
  resourceActionId: string()
});

export const PermissionsCreateSchema = z.object({
  id: string(),
  entityId: string(),
  entityName: string(),
  resourceActionId: string()
});

export class PermissionsGetDto extends createZodDto(PermissionsGetSchema) {}
export class PermissionsDeleteDto extends createZodDto(PermissionsDeleteSchema) {}
export class PermissionsViewDto extends createZodDto(PermissionsViewSchema) {}
export class PermissionsUpdateDto extends createZodDto(PermissionsUpdateSchema) {}
export class PermissionsCreateDto extends createZodDto(PermissionsCreateSchema) {}