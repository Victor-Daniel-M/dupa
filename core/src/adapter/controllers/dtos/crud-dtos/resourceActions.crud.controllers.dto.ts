import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** ResourceActions schemas **//

export const ResourceActionsGetSchema = z.object({});

export const ResourceActionsDeleteSchema = z.object({
  id: z.string(),
});

export const ResourceActionsViewSchema = z.object({
  id: z.string(),
});

export const ResourceActionsUpdateSchema = z.object({
  id: string(),
  createdAt: string(),
  updatedAt: string(),
  actionId: string(),
  resourceId: string()
});

export const ResourceActionsCreateSchema = z.object({
  id: string(),
  createdAt: string(),
  updatedAt: string(),
  actionId: string(),
  resourceId: string()
});

export class ResourceActionsGetDto extends createZodDto(ResourceActionsGetSchema) {}
export class ResourceActionsDeleteDto extends createZodDto(ResourceActionsDeleteSchema) {}
export class ResourceActionsViewDto extends createZodDto(ResourceActionsViewSchema) {}
export class ResourceActionsUpdateDto extends createZodDto(ResourceActionsUpdateSchema) {}
export class ResourceActionsCreateDto extends createZodDto(ResourceActionsCreateSchema) {}