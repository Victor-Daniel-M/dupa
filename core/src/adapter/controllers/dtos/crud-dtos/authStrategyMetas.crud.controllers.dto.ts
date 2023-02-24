import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** AuthStrategyMetas schemas **//

export const AuthStrategyMetasGetSchema = z.object({});

export const AuthStrategyMetasDeleteSchema = z.object({
  id: z.string(),
});

export const AuthStrategyMetasViewSchema = z.object({
  id: z.string(),
});

export const AuthStrategyMetasUpdateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  valueType: string(),
  authStrategyId: string(),
  createdAt: string(),
  updatedAt: string()
});

export const AuthStrategyMetasCreateSchema = z.object({
  id: string(),
  key: string(),
  value: string(),
  valueType: string(),
  authStrategyId: string(),
  createdAt: string(),
  updatedAt: string()
});

export class AuthStrategyMetasGetDto extends createZodDto(AuthStrategyMetasGetSchema) {}
export class AuthStrategyMetasDeleteDto extends createZodDto(AuthStrategyMetasDeleteSchema) {}
export class AuthStrategyMetasViewDto extends createZodDto(AuthStrategyMetasViewSchema) {}
export class AuthStrategyMetasUpdateDto extends createZodDto(AuthStrategyMetasUpdateSchema) {}
export class AuthStrategyMetasCreateDto extends createZodDto(AuthStrategyMetasCreateSchema) {}