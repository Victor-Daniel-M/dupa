import { createZodDto } from 'nestjs-zod';
import { z, ZodString, ZodError, string, number } from 'nestjs-zod/z';
    
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