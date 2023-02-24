import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** PropertyCategories schemas **//

export const PropertyCategoriesGetSchema = z.object({});

export const PropertyCategoriesDeleteSchema = z.object({
  id: z.string(),
});

export const PropertyCategoriesViewSchema = z.object({
  id: z.string(),
});

export const PropertyCategoriesUpdateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export const PropertyCategoriesCreateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export class PropertyCategoriesGetDto extends createZodDto(PropertyCategoriesGetSchema) {}
export class PropertyCategoriesDeleteDto extends createZodDto(PropertyCategoriesDeleteSchema) {}
export class PropertyCategoriesViewDto extends createZodDto(PropertyCategoriesViewSchema) {}
export class PropertyCategoriesUpdateDto extends createZodDto(PropertyCategoriesUpdateSchema) {}
export class PropertyCategoriesCreateDto extends createZodDto(PropertyCategoriesCreateSchema) {}