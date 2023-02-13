import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError } from 'nestjs-zod/z';

const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

// class is required for using DTO as a type
export class LoginDto extends createZodDto(LoginSchema) {}
