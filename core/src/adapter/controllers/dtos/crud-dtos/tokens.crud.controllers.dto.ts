import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Tokens schemas **//

export const TokensGetSchema = z.object({});

export const TokensDeleteSchema = z.object({
  id: z.string(),
});

export const TokensViewSchema = z.object({
  id: z.string(),
});

export const TokensUpdateSchema = z.object({
  id: string().optional(),
  key: string(),
  value: string(),
  entityName: string(),
  entityId: string(),
  expiresAt: string(),
  createdAt: string(),
  updatedAt: string()
});

export const TokensCreateSchema = z.object({
  id: string().optional(),
  key: string(),
  value: string(),
  entityName: string(),
  entityId: string(),
  expiresAt: string(),
  createdAt: string(),
  updatedAt: string()
});

export class TokensGetDto extends createZodDto(TokensGetSchema) {}
export class TokensDeleteDto extends createZodDto(TokensDeleteSchema) {}
export class TokensViewDto extends createZodDto(TokensViewSchema) {}
export class TokensUpdateDto extends createZodDto(TokensUpdateSchema) {}
export class TokensCreateDto extends createZodDto(TokensCreateSchema) {}