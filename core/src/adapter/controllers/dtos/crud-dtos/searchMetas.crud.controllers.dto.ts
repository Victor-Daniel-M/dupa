import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** SearchMetas schemas **//

export const SearchMetasGetSchema = z.object({});

export const SearchMetasDeleteSchema = z.object({
  id: z.string(),
});

export const SearchMetasViewSchema = z.object({
  id: z.string(),
});

export const SearchMetasUpdateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  valueType: string(),
  searchId: string(),
  createdAt: string(),
  updatedAt: string()
});

export const SearchMetasCreateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  valueType: string(),
  searchId: string(),
  createdAt: string(),
  updatedAt: string()
});

export class SearchMetasGetDto extends createZodDto(SearchMetasGetSchema) {}
export class SearchMetasDeleteDto extends createZodDto(SearchMetasDeleteSchema) {}
export class SearchMetasViewDto extends createZodDto(SearchMetasViewSchema) {}
export class SearchMetasUpdateDto extends createZodDto(SearchMetasUpdateSchema) {}
export class SearchMetasCreateDto extends createZodDto(SearchMetasCreateSchema) {}