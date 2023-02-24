import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string } from 'nestjs-zod/z';


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

