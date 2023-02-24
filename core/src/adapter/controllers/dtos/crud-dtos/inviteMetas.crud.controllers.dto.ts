import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
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
  valueType: string()
});

export const InviteMetasCreateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  ref: string(),
  createdAt: string(),
  updatedAt: string(),
  inviteId: string(),
  valueType: string()
});

export class InviteMetasGetDto extends createZodDto(InviteMetasGetSchema) {}
export class InviteMetasDeleteDto extends createZodDto(InviteMetasDeleteSchema) {}
export class InviteMetasViewDto extends createZodDto(InviteMetasViewSchema) {}
export class InviteMetasUpdateDto extends createZodDto(InviteMetasUpdateSchema) {}
export class InviteMetasCreateDto extends createZodDto(InviteMetasCreateSchema) {}