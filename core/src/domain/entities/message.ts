export enum MessageType {
  TALK_TO_REDFIN,
  TALK_TO_AGENT,
}

export interface IMessage {
  id?: string;
  text: string;
  mediaType: string;
  mediaValue: string;
  fromEntityId: string;
  fromEntityName: string;
  toEntityId: string;
  toEntityName: string;
  createdAt: string;
  updatedAt: string;
}
