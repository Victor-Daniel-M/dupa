import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** NotificationSubscribables schemas **//

export const NotificationSubscribablesGetSchema = z.object({});

export const NotificationSubscribablesDeleteSchema = z.object({
  id: z.string(),
});

export const NotificationSubscribablesViewSchema = z.object({
  id: z.string(),
});

export const NotificationSubscribablesUpdateSchema = z.object({
  id: string(),
  actionId: string(),
  createdAt: string(),
  updatedAt: string(),
  notificationStrategyId: string(),
  notificationFrequencyId: string()
});

export const NotificationSubscribablesCreateSchema = z.object({
  id: string(),
  actionId: string(),
  createdAt: string(),
  updatedAt: string(),
  notificationStrategyId: string(),
  notificationFrequencyId: string()
});

export class NotificationSubscribablesGetDto extends createZodDto(NotificationSubscribablesGetSchema) {}
export class NotificationSubscribablesDeleteDto extends createZodDto(NotificationSubscribablesDeleteSchema) {}
export class NotificationSubscribablesViewDto extends createZodDto(NotificationSubscribablesViewSchema) {}
export class NotificationSubscribablesUpdateDto extends createZodDto(NotificationSubscribablesUpdateSchema) {}
export class NotificationSubscribablesCreateDto extends createZodDto(NotificationSubscribablesCreateSchema) {}