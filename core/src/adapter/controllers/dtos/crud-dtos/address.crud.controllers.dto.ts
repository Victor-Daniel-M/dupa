import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string } from 'nestjs-zod/z';


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


//** EntityAddresses schemas **//

export const EntityAddressesGetSchema = z.object({});

export const EntityAddressesDeleteSchema = z.object({
  id: z.string(),
});

export const EntityAddressesViewSchema = z.object({
  id: z.string(),
});

export const EntityAddressesUpdateSchema = z.object({
  id: string(),
  entityId: string(),
  entityName: string(),
  createdAt: string(),
  updatedAt: string(),
  addressId: string()
});

export const EntityAddressesCreateSchema = z.object({
  id: string(),
  entityId: string(),
  entityName: string(),
  createdAt: string(),
  updatedAt: string(),
  addressId: string()
});

export class EntityAddressesGetDto extends createZodDto(EntityAddressesGetSchema) {}
export class EntityAddressesDeleteDto extends createZodDto(EntityAddressesDeleteSchema) {}
export class EntityAddressesViewDto extends createZodDto(EntityAddressesViewSchema) {}
export class EntityAddressesUpdateDto extends createZodDto(EntityAddressesUpdateSchema) {}
export class EntityAddressesCreateDto extends createZodDto(EntityAddressesCreateSchema) {}

