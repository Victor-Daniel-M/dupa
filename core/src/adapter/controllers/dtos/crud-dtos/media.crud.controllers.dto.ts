import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Media schemas **//

export const MediaGetSchema = z.object({});

export const MediaDeleteSchema = z.object({
  id: z.string(),
});

export const MediaViewSchema = z.object({
  id: z.string(),
});

export const MediaUpdateSchema = z.object({
  id: string(),
  entityId: string(),
  entityName: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  mediaType: string()
});

export const MediaCreateSchema = z.object({
  id: string(),
  entityId: string(),
  entityName: string(),
  value: string(),
  createdAt: string(),
  updatedAt: string(),
  mediaType: string()
});

export class MediaGetDto extends createZodDto(MediaGetSchema) {}
export class MediaDeleteDto extends createZodDto(MediaDeleteSchema) {}
export class MediaViewDto extends createZodDto(MediaViewSchema) {}
export class MediaUpdateDto extends createZodDto(MediaUpdateSchema) {}
export class MediaCreateDto extends createZodDto(MediaCreateSchema) {}