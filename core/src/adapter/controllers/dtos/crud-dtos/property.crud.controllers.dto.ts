import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string } from 'nestjs-zod/z';


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
  valueType: MetaValueTypes(),
  createdAt: string(),
  updatedAt: string()
});

export const PropertyMetaCategoriesCreateSchema = z.object({
  id: string(),
  code: string(),
  desc: string(),
  valueType: MetaValueTypes(),
  createdAt: string(),
  updatedAt: string()
});

export class PropertyMetaCategoriesGetDto extends createZodDto(PropertyMetaCategoriesGetSchema) {}
export class PropertyMetaCategoriesDeleteDto extends createZodDto(PropertyMetaCategoriesDeleteSchema) {}
export class PropertyMetaCategoriesViewDto extends createZodDto(PropertyMetaCategoriesViewSchema) {}
export class PropertyMetaCategoriesUpdateDto extends createZodDto(PropertyMetaCategoriesUpdateSchema) {}
export class PropertyMetaCategoriesCreateDto extends createZodDto(PropertyMetaCategoriesCreateSchema) {}


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

