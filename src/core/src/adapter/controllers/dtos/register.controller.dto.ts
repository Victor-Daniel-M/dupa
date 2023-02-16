import { UserTypes } from '../../../domain/entities/user';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const RegisterAsSearcherViaSystem = z.object({
  email: z.string().min(3),
  password: z.string(),
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userType: z.enum(UserTypes),
});

// class is required for using DTO as a type
export class RegisterAsSearcherViaSystemDTO extends createZodDto(
  RegisterAsSearcherViaSystem,
) {}
