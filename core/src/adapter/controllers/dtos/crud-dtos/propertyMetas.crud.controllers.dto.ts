import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** PropertyMetas schemas **//

export const PropertyMetasGetSchema = z.object({});

export const PropertyMetasDeleteSchema = z.object({
  id: z.string(),
});

export const PropertyMetasViewSchema = z.object({
  id: z.string(),
});

export const PropertyMetasUpdateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  propertyId: string(),
  parentId: string(),
  propertyMetaCategoryId: string()
});

export const PropertyMetasCreateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  propertyId: string(),
  parentId: string(),
  propertyMetaCategoryId: string()
});

export class PropertyMetasGetDto extends createZodDto(PropertyMetasGetSchema) {}
export class PropertyMetasDeleteDto extends createZodDto(PropertyMetasDeleteSchema) {}
export class PropertyMetasViewDto extends createZodDto(PropertyMetasViewSchema) {}
export class PropertyMetasUpdateDto extends createZodDto(PropertyMetasUpdateSchema) {}
export class PropertyMetasCreateDto extends createZodDto(PropertyMetasCreateSchema) {}