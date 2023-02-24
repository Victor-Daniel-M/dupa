import { createZodDto } from 'nestjs-zod';
import { z, string } from 'nestjs-zod/z';

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
  updatedAt: string(),
});

export const ActionsCreateSchema = z.object({
  id: string(),
  name: string(),
  code: string(),
  desc: string(),
  createdAt: string(),
  updatedAt: string(),
});

export class ActionsGetDto extends createZodDto(ActionsGetSchema) {}
export class ActionsDeleteDto extends createZodDto(ActionsDeleteSchema) {}
export class ActionsViewDto extends createZodDto(ActionsViewSchema) {}
export class ActionsUpdateDto extends createZodDto(ActionsUpdateSchema) {}
export class ActionsCreateDto extends createZodDto(ActionsCreateSchema) {}

//** ResourceActions schemas **//

export const ResourceActionsGetSchema = z.object({});

export const ResourceActionsDeleteSchema = z.object({
  id: z.string(),
});

export const ResourceActionsViewSchema = z.object({
  id: z.string(),
});

export const ResourceActionsUpdateSchema = z.object({
  id: string(),
  createdAt: string(),
  updatedAt: string(),
  actionId: string(),
  resourceId: string(),
});

export const ResourceActionsCreateSchema = z.object({
  id: string(),
  createdAt: string(),
  updatedAt: string(),
  actionId: string(),
  resourceId: string(),
});

export class ResourceActionsGetDto extends createZodDto(
  ResourceActionsGetSchema,
) {}
export class ResourceActionsDeleteDto extends createZodDto(
  ResourceActionsDeleteSchema,
) {}
export class ResourceActionsViewDto extends createZodDto(
  ResourceActionsViewSchema,
) {}
export class ResourceActionsUpdateDto extends createZodDto(
  ResourceActionsUpdateSchema,
) {}
export class ResourceActionsCreateDto extends createZodDto(
  ResourceActionsCreateSchema,
) {}
