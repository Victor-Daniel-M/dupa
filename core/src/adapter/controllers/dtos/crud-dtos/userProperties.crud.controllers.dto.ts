import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** UserProperties schemas **//

export const UserPropertiesGetSchema = z.object({});

export const UserPropertiesDeleteSchema = z.object({
  id: z.string(),
});

export const UserPropertiesViewSchema = z.object({
  id: z.string(),
});

export const UserPropertiesUpdateSchema = z.object({
  id: string(),
  userPropertyType: string(),
  propertyId: string(),
  userId: string()
});

export const UserPropertiesCreateSchema = z.object({
  id: string(),
  userPropertyType: string(),
  propertyId: string(),
  userId: string()
});

export class UserPropertiesGetDto extends createZodDto(UserPropertiesGetSchema) {}
export class UserPropertiesDeleteDto extends createZodDto(UserPropertiesDeleteSchema) {}
export class UserPropertiesViewDto extends createZodDto(UserPropertiesViewSchema) {}
export class UserPropertiesUpdateDto extends createZodDto(UserPropertiesUpdateSchema) {}
export class UserPropertiesCreateDto extends createZodDto(UserPropertiesCreateSchema) {}