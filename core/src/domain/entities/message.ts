import { CString } from '../value-objects/string';

export enum MessageType {
  TALK_TO_REDFIN,
  TALK_TO_AGENT,
}

export class Message {
  id: CString;
  text: CString;
  mediaType: CString;
  mediaValue: CString;
  fromEntityId: CString;
  fromEntityName: CString;
  toEntityId: CString;
  toEntityName: CString;
  createdAt: CString;
  updatedAt: CString;
}
