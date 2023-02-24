import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Properties schemas **//

export const PropertiesGetSchema = z.object({});

export const PropertiesDeleteSchema = z.object({
  id: z.string(),
});

export const PropertiesViewSchema = z.object({
  id: z.string(),
});

export const PropertiesUpdateSchema = z.object({
  id: string(),
  title: string(),
  description: string(),
  coverImage: string(),
  cost: number(),
  createdAt: string(),
  updatedAt: string(),
  openDate: string(),
  propertyCategoryId: string()
});

export const PropertiesCreateSchema = z.object({
  id: string(),
  title: string(),
  description: string(),
  coverImage: string(),
  cost: number(),
  createdAt: string(),
  updatedAt: string(),
  openDate: string(),
  propertyCategoryId: string()
});

export class PropertiesGetDto extends createZodDto(PropertiesGetSchema) {}
export class PropertiesDeleteDto extends createZodDto(PropertiesDeleteSchema) {}
export class PropertiesViewDto extends createZodDto(PropertiesViewSchema) {}
export class PropertiesUpdateDto extends createZodDto(PropertiesUpdateSchema) {}
export class PropertiesCreateDto extends createZodDto(PropertiesCreateSchema) {}