import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Actions schemas **//

export const ActionsGetSchema = z.object({});

export const ActionsDeleteSchema = z.object({
  id: z.string(),
});

export const ActionsViewSchema = z.object({
  id: z.string(),
});

export const ActionsUpdateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export const ActionsCreateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string()
});

export class ActionsGetDto extends createZodDto(ActionsGetSchema) {}
export class ActionsDeleteDto extends createZodDto(ActionsDeleteSchema) {}
export class ActionsViewDto extends createZodDto(ActionsViewSchema) {}
export class ActionsUpdateDto extends createZodDto(ActionsUpdateSchema) {}
export class ActionsCreateDto extends createZodDto(ActionsCreateSchema) {}