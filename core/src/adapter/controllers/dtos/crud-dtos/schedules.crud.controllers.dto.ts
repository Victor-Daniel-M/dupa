import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Schedules schemas **//

export const SchedulesGetSchema = z.object({});

export const SchedulesDeleteSchema = z.object({
  id: z.string(),
});

export const SchedulesViewSchema = z.object({
  id: z.string(),
});

export const SchedulesUpdateSchema = z.object({
  id: string(),
  openAt: string(),
  closeAt: string(),
  entityName: string(),
  entityId: string(),
  createdAt: string(),
  updatedAt: string(),
  scheduleId: string(),
  dayOfWeek: string()
});

export const SchedulesCreateSchema = z.object({
  id: string(),
  openAt: string(),
  closeAt: string(),
  entityName: string(),
  entityId: string(),
  createdAt: string(),
  updatedAt: string(),
  scheduleId: string(),
  dayOfWeek: string()
});

export class SchedulesGetDto extends createZodDto(SchedulesGetSchema) {}
export class SchedulesDeleteDto extends createZodDto(SchedulesDeleteSchema) {}
export class SchedulesViewDto extends createZodDto(SchedulesViewSchema) {}
export class SchedulesUpdateDto extends createZodDto(SchedulesUpdateSchema) {}
export class SchedulesCreateDto extends createZodDto(SchedulesCreateSchema) {}