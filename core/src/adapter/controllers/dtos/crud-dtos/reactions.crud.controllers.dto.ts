import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Reactions schemas **//

export const ReactionsGetSchema = z.object({});

export const ReactionsDeleteSchema = z.object({
  id: z.string(),
});

export const ReactionsViewSchema = z.object({
  id: z.string(),
});

export const ReactionsUpdateSchema = z.object({
  id: string(),
  fromEntityId: string(),
  fromEntityName: string(),
  toEntityId: string(),
  toEntityName: string(),
  text: string(),
  createdAt: string(),
  updatedAt: string(),
  reactionType: string()
});

export const ReactionsCreateSchema = z.object({
  id: string(),
  fromEntityId: string(),
  fromEntityName: string(),
  toEntityId: string(),
  toEntityName: string(),
  text: string(),
  createdAt: string(),
  updatedAt: string(),
  reactionType: string()
});

export class ReactionsGetDto extends createZodDto(ReactionsGetSchema) {}
export class ReactionsDeleteDto extends createZodDto(ReactionsDeleteSchema) {}
export class ReactionsViewDto extends createZodDto(ReactionsViewSchema) {}
export class ReactionsUpdateDto extends createZodDto(ReactionsUpdateSchema) {}
export class ReactionsCreateDto extends createZodDto(ReactionsCreateSchema) {}