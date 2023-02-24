import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string } from 'nestjs-zod/z';


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


//** InviteMetas schemas **//

export const InviteMetasGetSchema = z.object({});

export const InviteMetasDeleteSchema = z.object({
  id: z.string(),
});

export const InviteMetasViewSchema = z.object({
  id: z.string(),
});

export const InviteMetasUpdateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  ref: string(),
  createdAt: string(),
  updatedAt: string(),
  inviteId: string(),
  valueType: MetaValueTypes()
});

export const InviteMetasCreateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  ref: string(),
  createdAt: string(),
  updatedAt: string(),
  inviteId: string(),
  valueType: MetaValueTypes()
});

export class InviteMetasGetDto extends createZodDto(InviteMetasGetSchema) {}
export class InviteMetasDeleteDto extends createZodDto(InviteMetasDeleteSchema) {}
export class InviteMetasViewDto extends createZodDto(InviteMetasViewSchema) {}
export class InviteMetasUpdateDto extends createZodDto(InviteMetasUpdateSchema) {}
export class InviteMetasCreateDto extends createZodDto(InviteMetasCreateSchema) {}

