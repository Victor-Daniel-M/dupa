import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Users schemas **//

export const UsersGetSchema = z.object({});

export const UsersDeleteSchema = z.object({
  id: z.string(),
});

export const UsersViewSchema = z.object({
  id: z.string(),
});

export const UsersUpdateSchema = z.object({
  id: string().optional(),
  email: string().optional(),
  password: string().optional(),
  firstName: string().optional(),
  lastName: string().optional(),
  phoneNumber: string().optional(),
  createdAt: string().optional(),
  updatedAt: string().optional(),
  userType: string()
});

export const UsersCreateSchema = z.object({
  id: string().optional(),
  email: string().optional(),
  password: string().optional(),
  firstName: string().optional(),
  lastName: string().optional(),
  phoneNumber: string().optional(),
  createdAt: string().optional(),
  updatedAt: string().optional(),
  userType: string()
});

export class UsersGetDto extends createZodDto(UsersGetSchema) {}
export class UsersDeleteDto extends createZodDto(UsersDeleteSchema) {}
export class UsersViewDto extends createZodDto(UsersViewSchema) {}
export class UsersUpdateDto extends createZodDto(UsersUpdateSchema) {}
export class UsersCreateDto extends createZodDto(UsersCreateSchema) {}