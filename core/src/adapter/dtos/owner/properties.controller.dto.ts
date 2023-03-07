import { createZodDto } from 'nestjs-zod';
import { number, string, z } from 'nestjs-zod/z';

export const CreatePropertyReq = z.object({
  title: string(),
  description: string(),
  coverImage: string(),
  cost: number(),
  createdAt: string(),
  updatedAt: string(),
  openDate: string(),
  propertyCategoryId: string(),
});

export class CreatePropertyReqDto extends createZodDto(CreatePropertyReq) {}
