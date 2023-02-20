enum MediaType {
  IMAGE,
  VIDEO,
  AUDIO,
}

export class Media {
  id: string;
  entityId: string;
  entityName: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  mediaType: MediaType;
}
