import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** AuthStrategies schemas **//

export const AuthStrategiesGetSchema = z.object({});

export const AuthStrategiesDeleteSchema = z.object({
  id: z.string(),
});

export const AuthStrategiesViewSchema = z.object({
  id: z.string(),
});

export const AuthStrategiesUpdateSchema = z.object({
  id: string(),
  name: string(),
  desc: string(),
  code: string(),
  createdAt: string(),
  updatedAt: string()
});

export const AuthStrategiesCreateSchema = z.object({
  id: string(),
  name: string(),
  desc: string(),
  code: string(),
  createdAt: string(),
  updatedAt: string()
});

export class AuthStrategiesGetDto extends createZodDto(AuthStrategiesGetSchema) {}
export class AuthStrategiesDeleteDto extends createZodDto(AuthStrategiesDeleteSchema) {}
export class AuthStrategiesViewDto extends createZodDto(AuthStrategiesViewSchema) {}
export class AuthStrategiesUpdateDto extends createZodDto(AuthStrategiesUpdateSchema) {}
export class AuthStrategiesCreateDto extends createZodDto(AuthStrategiesCreateSchema) {}