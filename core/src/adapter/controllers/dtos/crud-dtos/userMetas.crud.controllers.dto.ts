import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** UserMetas schemas **//

export const UserMetasGetSchema = z.object({});

export const UserMetasDeleteSchema = z.object({
  id: z.string(),
});

export const UserMetasViewSchema = z.object({
  id: z.string(),
});

export const UserMetasUpdateSchema = z.object({
  id: string().optional(),
  key: string(),
  value: string(),
  valueType: string(),
  userId: string(),
  createdAt: string(),
  updatedAt: string()
});

export const UserMetasCreateSchema = z.object({
  id: string().optional(),
  key: string(),
  value: string(),
  valueType: string(),
  userId: string(),
  createdAt: string(),
  updatedAt: string()
});

export class UserMetasGetDto extends createZodDto(UserMetasGetSchema) {}
export class UserMetasDeleteDto extends createZodDto(UserMetasDeleteSchema) {}
export class UserMetasViewDto extends createZodDto(UserMetasViewSchema) {}
export class UserMetasUpdateDto extends createZodDto(UserMetasUpdateSchema) {}
export class UserMetasCreateDto extends createZodDto(UserMetasCreateSchema) {}