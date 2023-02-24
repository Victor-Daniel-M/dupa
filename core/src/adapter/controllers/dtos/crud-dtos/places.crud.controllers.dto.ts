import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Places schemas **//

export const PlacesGetSchema = z.object({});

export const PlacesDeleteSchema = z.object({
  id: z.string(),
});

export const PlacesViewSchema = z.object({
  id: z.string(),
});

export const PlacesUpdateSchema = z.object({
  id: string(),
  createdAt: string(),
  updatedAt: string()
});

export const PlacesCreateSchema = z.object({
  id: string(),
  createdAt: string(),
  updatedAt: string()
});

export class PlacesGetDto extends createZodDto(PlacesGetSchema) {}
export class PlacesDeleteDto extends createZodDto(PlacesDeleteSchema) {}
export class PlacesViewDto extends createZodDto(PlacesViewSchema) {}
export class PlacesUpdateDto extends createZodDto(PlacesUpdateSchema) {}
export class PlacesCreateDto extends createZodDto(PlacesCreateSchema) {}