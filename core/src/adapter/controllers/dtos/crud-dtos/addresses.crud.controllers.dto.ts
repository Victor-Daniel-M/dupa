import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
//** Addresses schemas **//

export const AddressesGetSchema = z.object({});

export const AddressesDeleteSchema = z.object({
  id: z.string(),
});

export const AddressesViewSchema = z.object({
  id: z.string(),
});

export const AddressesUpdateSchema = z.object({
  id: string(),
  city: string(),
  street: string(),
  district: string(),
  region: string(),
  createdAt: string(),
  updatedAt: string()
});

export const AddressesCreateSchema = z.object({
  id: string(),
  city: string(),
  street: string(),
  district: string(),
  region: string(),
  createdAt: string(),
  updatedAt: string()
});

export class AddressesGetDto extends createZodDto(AddressesGetSchema) {}
export class AddressesDeleteDto extends createZodDto(AddressesDeleteSchema) {}
export class AddressesViewDto extends createZodDto(AddressesViewSchema) {}
export class AddressesUpdateDto extends createZodDto(AddressesUpdateSchema) {}
export class AddressesCreateDto extends createZodDto(AddressesCreateSchema) {}