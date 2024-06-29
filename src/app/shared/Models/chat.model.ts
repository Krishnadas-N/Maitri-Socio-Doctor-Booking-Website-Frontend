export interface Conversation {
  _id: string;
  members: any[];
  isGroupChat: boolean;
  lastUpdate: string;
  isClosed: boolean;
}