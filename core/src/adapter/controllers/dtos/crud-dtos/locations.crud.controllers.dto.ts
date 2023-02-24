import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Locations schemas **//

export const LocationsGetSchema = z.object({});

export const LocationsDeleteSchema = z.object({
  id: z.string(),
});

export const LocationsViewSchema = z.object({
  id: z.string(),
});

export const LocationsUpdateSchema = z.object({
  id: string(),
  entityName: string(),
  entityId: string(),
  lat: number(),
  lng: number(),
  name: string(),
  createdAt: string(),
  updatedAt: string()
});

export const LocationsCreateSchema = z.object({
  id: string(),
  entityName: string(),
  entityId: string(),
  lat: number(),
  lng: number(),
  name: string(),
  createdAt: string(),
  updatedAt: string()
});

export class LocationsGetDto extends createZodDto(LocationsGetSchema) {}
export class LocationsDeleteDto extends createZodDto(LocationsDeleteSchema) {}
export class LocationsViewDto extends createZodDto(LocationsViewSchema) {}
export class LocationsUpdateDto extends createZodDto(LocationsUpdateSchema) {}
export class LocationsCreateDto extends createZodDto(LocationsCreateSchema) {}