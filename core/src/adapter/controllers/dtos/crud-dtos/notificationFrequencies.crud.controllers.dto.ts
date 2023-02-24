import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** NotificationFrequencies schemas **//

export const NotificationFrequenciesGetSchema = z.object({});

export const NotificationFrequenciesDeleteSchema = z.object({
  id: z.string(),
});

export const NotificationFrequenciesViewSchema = z.object({
  id: z.string(),
});

export const NotificationFrequenciesUpdateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export const NotificationFrequenciesCreateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export class NotificationFrequenciesGetDto extends createZodDto(NotificationFrequenciesGetSchema) {}
export class NotificationFrequenciesDeleteDto extends createZodDto(NotificationFrequenciesDeleteSchema) {}
export class NotificationFrequenciesViewDto extends createZodDto(NotificationFrequenciesViewSchema) {}
export class NotificationFrequenciesUpdateDto extends createZodDto(NotificationFrequenciesUpdateSchema) {}
export class NotificationFrequenciesCreateDto extends createZodDto(NotificationFrequenciesCreateSchema) {}