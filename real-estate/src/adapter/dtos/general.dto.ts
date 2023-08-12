export class PropertyCreateDto {
  cost: number;
  description: string;
  openDate: string;
  title: string;
  propertyCategoryId: number;
}

export class PropertiesCreateManyDto {
  properties: PropertyCreateDto[];
  businessId: number;
}
