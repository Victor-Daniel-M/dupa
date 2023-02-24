import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Messages schemas **//

export const MessagesGetSchema = z.object({});

export const MessagesDeleteSchema = z.object({
  id: z.string(),
});

export const MessagesViewSchema = z.object({
  id: z.string(),
});

export const MessagesUpdateSchema = z.object({
  id: string(),
  text: string(),
  mediaType: string(),
  mediaValue: string(),
  fromEntityId: string(),
  fromEntityName: string(),
  toEntityId: string(),
  toEntityName: string(),
  createdAt: string(),
  updatedAt: string()
});

export const MessagesCreateSchema = z.object({
  id: string(),
  text: string(),
  mediaType: string(),
  mediaValue: string(),
  fromEntityId: string(),
  fromEntityName: string(),
  toEntityId: string(),
  toEntityName: string(),
  createdAt: string(),
  updatedAt: string()
});

export class MessagesGetDto extends createZodDto(MessagesGetSchema) {}
export class MessagesDeleteDto extends createZodDto(MessagesDeleteSchema) {}
export class MessagesViewDto extends createZodDto(MessagesViewSchema) {}
export class MessagesUpdateDto extends createZodDto(MessagesUpdateSchema) {}
export class MessagesCreateDto extends createZodDto(MessagesCreateSchema) {}