import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** NotificationSubscribers schemas **//

export const NotificationSubscribersGetSchema = z.object({});

export const NotificationSubscribersDeleteSchema = z.object({
  id: z.string(),
});

export const NotificationSubscribersViewSchema = z.object({
  id: z.string(),
});

export const NotificationSubscribersUpdateSchema = z.object({
  id: string(),
  entityId: string(),
  entityName: string(),
  createdAt: string(),
  updatedAt: string(),
  notificationSubscribableId: string()
});

export const NotificationSubscribersCreateSchema = z.object({
  id: string(),
  entityId: string(),
  entityName: string(),
  createdAt: string(),
  updatedAt: string(),
  notificationSubscribableId: string()
});

export class NotificationSubscribersGetDto extends createZodDto(NotificationSubscribersGetSchema) {}
export class NotificationSubscribersDeleteDto extends createZodDto(NotificationSubscribersDeleteSchema) {}
export class NotificationSubscribersViewDto extends createZodDto(NotificationSubscribersViewSchema) {}
export class NotificationSubscribersUpdateDto extends createZodDto(NotificationSubscribersUpdateSchema) {}
export class NotificationSubscribersCreateDto extends createZodDto(NotificationSubscribersCreateSchema) {}