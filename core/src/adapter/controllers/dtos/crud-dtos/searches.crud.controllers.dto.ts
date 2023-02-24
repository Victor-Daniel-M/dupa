import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
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
  isSaved: string(),
  searchType: string(),
  createdAt: string(),
  updatedAt: string()
});

export const SearchesCreateSchema = z.object({
  id: string(),
  userId: string(),
  isSaved: string(),
  searchType: string(),
  createdAt: string(),
  updatedAt: string()
});

export class SearchesGetDto extends createZodDto(SearchesGetSchema) {}
export class SearchesDeleteDto extends createZodDto(SearchesDeleteSchema) {}
export class SearchesViewDto extends createZodDto(SearchesViewSchema) {}
export class SearchesUpdateDto extends createZodDto(SearchesUpdateSchema) {}
export class SearchesCreateDto extends createZodDto(SearchesCreateSchema) {}