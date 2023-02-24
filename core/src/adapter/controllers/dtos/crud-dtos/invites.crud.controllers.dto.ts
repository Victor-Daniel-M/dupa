import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Invites schemas **//

export const InvitesGetSchema = z.object({});

export const InvitesDeleteSchema = z.object({
  id: z.string(),
});

export const InvitesViewSchema = z.object({
  id: z.string(),
});

export const InvitesUpdateSchema = z.object({
  id: string(),
  text: string(),
  inviteType: string(),
  createdAt: string(),
  updatedAt: string()
});

export const InvitesCreateSchema = z.object({
  id: string(),
  text: string(),
  inviteType: string(),
  createdAt: string(),
  updatedAt: string()
});

export class InvitesGetDto extends createZodDto(InvitesGetSchema) {}
export class InvitesDeleteDto extends createZodDto(InvitesDeleteSchema) {}
export class InvitesViewDto extends createZodDto(InvitesViewSchema) {}
export class InvitesUpdateDto extends createZodDto(InvitesUpdateSchema) {}
export class InvitesCreateDto extends createZodDto(InvitesCreateSchema) {}