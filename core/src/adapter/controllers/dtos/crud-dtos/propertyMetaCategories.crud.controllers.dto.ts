import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** PropertyMetaCategories schemas **//

export const PropertyMetaCategoriesGetSchema = z.object({});

export const PropertyMetaCategoriesDeleteSchema = z.object({
  id: z.string(),
});

export const PropertyMetaCategoriesViewSchema = z.object({
  id: z.string(),
});

export const PropertyMetaCategoriesUpdateSchema = z.object({
  id: string(),
  code: string(),
  desc: string(),
  valueType: string(),
  createdAt: string(),
  updatedAt: string()
});

export const PropertyMetaCategoriesCreateSchema = z.object({
  id: string(),
  code: string(),
  desc: string(),
  valueType: string(),
  createdAt: string(),
  updatedAt: string()
});

export class PropertyMetaCategoriesGetDto extends createZodDto(PropertyMetaCategoriesGetSchema) {}
export class PropertyMetaCategoriesDeleteDto extends createZodDto(PropertyMetaCategoriesDeleteSchema) {}
export class PropertyMetaCategoriesViewDto extends createZodDto(PropertyMetaCategoriesViewSchema) {}
export class PropertyMetaCategoriesUpdateDto extends createZodDto(PropertyMetaCategoriesUpdateSchema) {}
export class PropertyMetaCategoriesCreateDto extends createZodDto(PropertyMetaCategoriesCreateSchema) {}