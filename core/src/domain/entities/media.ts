enum MediaType {
  IMAGE,
  VIDEO,
  AUDIO,
}

export interface IMedia {
  id?: string;
  entityId: string;
  entityName: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  mediaType: MediaType;
}
