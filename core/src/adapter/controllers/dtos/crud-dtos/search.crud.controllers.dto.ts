import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string } from 'nestjs-zod/z';


//** Searches schemas **//

export const SearchesGetSchema = z.object({});

export const SearchesDeleteSchema = z.object({
  id: z.string(),
});

export const SearchesViewSchema = z.object({
  id: z.string(),
});

export const SearchesUpdateSchema = z.object({
  id: string(),
  userId: string(),
  isSaved: Boolean(),
  searchType: SearchType(),
  createdAt: string(),
  updatedAt: string()
});

export const SearchesCreateSchema = z.object({
  id: string(),
  userId: string(),
  isSaved: Boolean(),
  searchType: SearchType(),
  createdAt: string(),
  updatedAt: string()
});

export class SearchesGetDto extends createZodDto(SearchesGetSchema) {}
export class SearchesDeleteDto extends createZodDto(SearchesDeleteSchema) {}
export class SearchesViewDto extends createZodDto(SearchesViewSchema) {}
export class SearchesUpdateDto extends createZodDto(SearchesUpdateSchema) {}
export class SearchesCreateDto extends createZodDto(SearchesCreateSchema) {}


//** SearchMetas schemas **//

export const SearchMetasGetSchema = z.object({});

export const SearchMetasDeleteSchema = z.object({
  id: z.string(),
});

export const SearchMetasViewSchema = z.object({
  id: z.string(),
});

export const SearchMetasUpdateSchema = z.object({
  id: String(),
  key: string(),
  value: string(),
  valueType: MetaValueTypes(),
  searchId: string(),
  createdAt: string(),
  updatedAt: string()
});

export const SearchMetasCreateSchema = z.object({
  id: String(),
  key: string(),
  value: string(),
  valueType: MetaValueTypes(),
  searchId: string(),
  createdAt: string(),
  updatedAt: string()
});

export class SearchMetasGetDto extends createZodDto(SearchMetasGetSchema) {}
export class SearchMetasDeleteDto extends createZodDto(SearchMetasDeleteSchema) {}
export class SearchMetasViewDto extends createZodDto(SearchMetasViewSchema) {}
export class SearchMetasUpdateDto extends createZodDto(SearchMetasUpdateSchema) {}
export class SearchMetasCreateDto extends createZodDto(SearchMetasCreateSchema) {}

