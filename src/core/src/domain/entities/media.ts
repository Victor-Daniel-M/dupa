import { CString } from '../value-objects/string';

enum MediaType {
  IMAGE,
  VIDEO,
  AUDIO,
}

export class Media {
  id: CString;
  entityId: CString;
  entityName: CString;
  value: CString;
  createdAt: CString;
  updatedAt: CString;
  mediaType: MediaType;
}
