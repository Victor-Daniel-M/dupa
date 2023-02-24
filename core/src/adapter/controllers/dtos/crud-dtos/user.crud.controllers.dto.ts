import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string } from 'nestjs-zod/z';


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
  userType: UserType()
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
  userType: UserType()
});

export class UsersGetDto extends createZodDto(UsersGetSchema) {}
export class UsersDeleteDto extends createZodDto(UsersDeleteSchema) {}
export class UsersViewDto extends createZodDto(UsersViewSchema) {}
export class UsersUpdateDto extends createZodDto(UsersUpdateSchema) {}
export class UsersCreateDto extends createZodDto(UsersCreateSchema) {}


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
  valueType: MetaValueTypes(),
  userId: string(),
  createdAt: string(),
  updatedAt: string()
});

export const UserMetasCreateSchema = z.object({
  id: string().optional(),
  key: string(),
  value: string(),
  valueType: MetaValueTypes(),
  userId: string(),
  createdAt: string(),
  updatedAt: string()
});

export class UserMetasGetDto extends createZodDto(UserMetasGetSchema) {}
export class UserMetasDeleteDto extends createZodDto(UserMetasDeleteSchema) {}
export class UserMetasViewDto extends createZodDto(UserMetasViewSchema) {}
export class UserMetasUpdateDto extends createZodDto(UserMetasUpdateSchema) {}
export class UserMetasCreateDto extends createZodDto(UserMetasCreateSchema) {}

