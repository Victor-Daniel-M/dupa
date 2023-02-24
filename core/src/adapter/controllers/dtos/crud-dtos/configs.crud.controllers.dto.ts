import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Configs schemas **//

export const ConfigsGetSchema = z.object({});

export const ConfigsDeleteSchema = z.object({
  id: z.string(),
});

export const ConfigsViewSchema = z.object({
  id: z.string(),
});

export const ConfigsUpdateSchema = z.object({
  id: string(),
  text: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string()
});

export const ConfigsCreateSchema = z.object({
  id: string(),
  text: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string()
});

export class ConfigsGetDto extends createZodDto(ConfigsGetSchema) {}
export class ConfigsDeleteDto extends createZodDto(ConfigsDeleteSchema) {}
export class ConfigsViewDto extends createZodDto(ConfigsViewSchema) {}
export class ConfigsUpdateDto extends createZodDto(ConfigsUpdateSchema) {}
export class ConfigsCreateDto extends createZodDto(ConfigsCreateSchema) {}