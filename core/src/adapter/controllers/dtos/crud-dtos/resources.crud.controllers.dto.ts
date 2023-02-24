import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Resources schemas **//

export const ResourcesGetSchema = z.object({});

export const ResourcesDeleteSchema = z.object({
  id: z.string(),
});

export const ResourcesViewSchema = z.object({
  id: z.string(),
});

export const ResourcesUpdateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export const ResourcesCreateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export class ResourcesGetDto extends createZodDto(ResourcesGetSchema) {}
export class ResourcesDeleteDto extends createZodDto(ResourcesDeleteSchema) {}
export class ResourcesViewDto extends createZodDto(ResourcesViewSchema) {}
export class ResourcesUpdateDto extends createZodDto(ResourcesUpdateSchema) {}
export class ResourcesCreateDto extends createZodDto(ResourcesCreateSchema) {}