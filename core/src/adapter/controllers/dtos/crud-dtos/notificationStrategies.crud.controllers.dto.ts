import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** NotificationStrategies schemas **//

export const NotificationStrategiesGetSchema = z.object({});

export const NotificationStrategiesDeleteSchema = z.object({
  id: z.string(),
});

export const NotificationStrategiesViewSchema = z.object({
  id: z.string(),
});

export const NotificationStrategiesUpdateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export const NotificationStrategiesCreateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export class NotificationStrategiesGetDto extends createZodDto(NotificationStrategiesGetSchema) {}
export class NotificationStrategiesDeleteDto extends createZodDto(NotificationStrategiesDeleteSchema) {}
export class NotificationStrategiesViewDto extends createZodDto(NotificationStrategiesViewSchema) {}
export class NotificationStrategiesUpdateDto extends createZodDto(NotificationStrategiesUpdateSchema) {}
export class NotificationStrategiesCreateDto extends createZodDto(NotificationStrategiesCreateSchema) {}